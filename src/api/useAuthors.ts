import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import type { ApiResponse } from "../types/api";
import type { Author } from "../types/author";

const url = import.meta.env.VITE_API_URL
const endpoint = '/author'
const fullUrl = `${url}${endpoint}`

let authorsCache: ApiResponse<Author[]> | null = null

export function useAuthors(){

  const { fetchedData, isLoading, fetchError }  = useFetch<ApiResponse<Author[]>>(fullUrl)

  useEffect(() => {
    if(!authorsCache && fetchedData) {
      authorsCache = fetchedData
    }
  }, [fetchedData])

  return {
    data: authorsCache ?? fetchedData,
    isLoading: !authorsCache && isLoading,
    error: fetchError,
  }
}