"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabela } from "@/components/Table";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { PaginationComponent } from "@/components/Pagination";

export default function Home() {
  const params: Readonly<URLSearchParams> = useSearchParams();

  const [filters, setFilters] = useState({
    id: params.get("id") || "",
    name: params.get("name") || "",
  });

  const defineParams = (e: { preventDefault: () => void }): void => {
    e.preventDefault();

    let params: URLSearchParams = new URLSearchParams(window.location.search);

    if (filters.id) {
      params.set("id", filters.id);
    } else {
      params.delete("id");
    }

    if (filters.name) {
      params.set("name", filters.name);
    } else {
      params.delete("name");
    }

    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <>
      <div className={"flex flex-col w-screen h-screen p-10"}>
        <div className={"flex flex-col items-center"}>
          <form
            onSubmit={defineParams}
            className={"flex items-end w-1/3 gap-5"}
          >
            <div className={"flex flex-col"}>
              <label htmlFor="id">Filtrar por id:</label>
              <Input
                value={filters.id}
                onChange={(e) =>
                  setFilters({ ...filters, id: String(e.target.value) })
                }
                type={"text"}
                id={"id"}
                placeholder={"id"}
              />
            </div>

            <div className={"flex flex-col"}>
              <label htmlFor="nome">Filtrar por nome:</label>
              <Input
                value={filters.name}
                onChange={(e) =>
                  setFilters({ ...filters, name: String(e.target.value) })
                }
                type={"text"}
                id={"nome"}
                placeholder={"nome"}
              />
            </div>

            <div className={"flex flex-col"}>
              <Button variant={"outline"}>Aplicar filtros</Button>
            </div>
          </form>
        </div>

        <div className={"flex flex-col w-full items-center "}>
          <div className={"w-1/2"}>
            <Tabela />
          </div>
        </div>

        <div className={"mt-5"}>
          <PaginationComponent />
        </div>
      </div>
    </>
  );
}
