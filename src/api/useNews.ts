import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import type { ApiResponse } from "../types/api";
import type { News } from "../types/news";

const url = import.meta.env.VITE_API_URL
const endpoint = "/news"
const fullUrl = `${url}${endpoint}`

let newsCache : ApiResponse<News[]> | null = null

export function useNews(){

  const { fetchedData, isLoading, fetchError } = useFetch<ApiResponse<News[]>>(fullUrl)

  useEffect(() => {
    if(!newsCache && fetchedData){
      newsCache = fetchedData
    }
  }, [fetchedData])

  return {
    data: newsCache ?? fetchedData,
    isLoading: !newsCache && isLoading,
    error: fetchError
  }

}