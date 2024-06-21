import axios from "axios";
import {api} from '@/configs/axios.config'

export const productsDataReq = async (page: number, limit: number) => {
    try{
        console.log(page)
        const products = await api.get(`/products?page=${page}&limit=${limit}`)
        return products.data
    }catch (error){
        console.log(error)
    }
}