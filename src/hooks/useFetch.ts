import { useState, useEffect } from "react";



export function useFetch<D>(url: string): {
  isLoading: boolean;
  fetchedData: D | null;
  fetchError: Error | null;
} {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchedData, setFetchedData] = useState<D | null>(null);
  const [fetchError, setFetchError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { 
          signal: abortController.signal,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer 7|RcNr3hSCJt8hfZU6dhovWZaX6mpVF05nKlSa9vBpa15b16a1',
            'Accept': 'application/json',
          },
        });

        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: D = await response.json()
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
