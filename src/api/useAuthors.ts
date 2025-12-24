import { useFetch } from "../hooks/useFetch";
import type { ApiResponse } from "../types/api";
import type { Author } from "../types/author";

const url = import.meta.env.VITE_API_URL
const endpoint = '/author'

const fullUrl = `${url}${endpoint}`

export function useAuthors(){
  return useFetch<ApiResponse<Author[]>>(fullUrl)
}