"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { productsDataReq } from "@/requests/productsData";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "@/providers/ProductsProvider";

export type Product = {
  id: string | null;
  name: string | null;
  price?: number | null;
};

export const Tabela = () => {
  const params = new URLSearchParams(window.location.search);

  const { products, totalPages, limit } = useContext(ProductsContext);

  const id = params.get("id");
  const name = params.get("name");

  let data = products;

  if (id) {
    data = data.filter((product: Product) =>
      product.id?.toLowerCase()?.includes(id.toLowerCase()),
    );
  }

  if (name) {
    data = data.filter((product: Product) =>
      product.name?.toLowerCase()?.includes(name.toLowerCase()),
    );
  }

  return (
    <Table className={"mt-5"}>
      <TableCaption>A list of products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Produto</TableHead>
          <TableHead>Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((product: Product) => (
          <TableRow key={product.id}>
            <TableCell className="w-[100px]">{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
