import { useState, useEffect } from 'react'
import axios from 'axios'

export interface Tree {
  id: number
  name: string
  species_name: string
  image: {
    src: string
    alt: string
  }
}

const useTreeDataFetching = (url: string) => {
  const [data, setData] = useState<Tree[]>([])
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ trees: Tree[] }>(url)
        setData(response.data.trees)
      } catch (err: any) {
        setError(err as Error)
      }
    }
    fetchData()
  }, [url])

  return { data, error }
}

export default useTreeDataFetching
