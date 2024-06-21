"use client"

import {createContext, ReactNode, useEffect, useState} from "react";
import {productsDataReq} from "@/requests/productsData";
import {ProductsRequestPagination} from "@/components/Pagination";
import {Product} from "@/components/Table";
import {useSearchParams} from "next/navigation";

export const ProductsContext = createContext({
    products: [] as Product[],
    totalPages: 0,
    limit: 0,
    page: "1"
})

export const ProductsProvider = ({children} : {children : ReactNode}) => {

    const [productsReq, setProductsReq] = useState<ProductsRequestPagination>({
        products: [],
        total: 0
    })

    const params = useSearchParams()
    const page : string = params.get('page') || "1"
    const limit : number = 10


    const setProd = async () =>{
        let prod : ProductsRequestPagination = await productsDataReq(Number(page), limit)
        setProductsReq(prod)
    }

    useEffect(() => {
        setProd()
    }, [page]);

    return <ProductsContext.Provider value={{
        products: productsReq.products,
        totalPages: productsReq.total / limit,
        limit: limit,
        page: page
    }}>{children}</ProductsContext.Provider>
}