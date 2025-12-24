import { useFetch } from "../hooks/useFetch";

import type { ApiResponse } from "../types/api";
import type { News } from "../types/news";

const url = import.meta.env.VITE_API_URL
const endpoint = "/news"
const fullUrl = `${url}${endpoint}`

export function useNews(){
  return useFetch<ApiResponse<News[]>>(fullUrl)
}