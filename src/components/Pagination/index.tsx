import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {Product} from "@/components/Table";
import {Button} from "@/components/ui/button";
import {useContext} from "react";
import {ProductsContext} from "@/providers/ProductsProvider";

export type ProductsRequestPagination = {
    products: Product[],
    total: number
}

export const PaginationComponent = () =>{

    const {products, totalPages, limit} = useContext(ProductsContext)

    const params : URLSearchParams = new URLSearchParams(window.location.search);
    const page : string = params.get('page') || "1"

    const setParams = (page: number) =>{

        params.set('page', String(page))

        window.history.pushState(
            null,
            "",
            `?${params.toString()}`
        );
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious className={'cursor-pointer'} onClick={() => setParams(Number(page) > 1 ? Number(page) - 1 : 1)} />
                </PaginationItem>

                <PaginationItem>
                    <Button disabled={Number(page) - 1 <= 0} onClick={() => setParams(Number(page) - 1)} variant={`${Number(page) - 1 === Number(page) ? 'outline' : 'ghost'}`}>{Number(page) - 1}</Button>
                </PaginationItem>

                <PaginationItem>
                    <Button disabled={Number(page) + 1 > limit} onClick={() => setParams(Number(page) + 1)} variant={`${Number(page) + 1 === Number(page) ? 'outline' : 'ghost'}`}>{Number(page) + 1}</Button>
                </PaginationItem>

                <PaginationItem>
                    <Button disabled={Number(page) + 2 > limit} onClick={() => setParams(Number(page) + 2)} variant={`${Number(page) + 2 === Number(page) ? 'outline' : 'ghost'}`}>{Number(page) + 2}</Button>
                </PaginationItem>

                <PaginationItem>
                    <PaginationNext className={'cursor-pointer'} onClick={() => setParams(Number(page) < totalPages ? Number(page) + 1 : totalPages)} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}