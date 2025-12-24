import type { Links, Meta } from "./pagination";


export type ApiResponse<T> = {
  data: T
  links: Links
  meta: Meta
}


export interface FetchState<T> {
  fetchedData: T | null
  isLoading: boolean
  fetchError: Error | null
}