import { useState, useEffect } from "react";
import type { FetchState } from "../types/api";

export function useFetch<T>(url: string) : FetchState<T>{

  const [fetchedData, setFetchedData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const token = import.meta.env.VITE_TOKEN
    
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
            'Accept': 'application/json',
          },
          signal: abortController.signal
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: T = await response.json()
        setFetchedData(data)

      } catch (error) {
        if(error instanceof Error && error.name !== "AbortError"){
          setFetchError(error)
        }
      } finally{
        setIsLoading(false)
      }
    }

    fetchData()

    return () => abortController.abort();
  
  }, [url]);

  return { isLoading, fetchedData, fetchError };
}
