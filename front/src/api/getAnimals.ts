import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchAnimals = async () => {
   const data = await fetch('http://localhost:2780/')
   const resolvedData = await data.json() 
   return resolvedData
}

const axiosAnimals = () => {
    const data = axios.get('http://localhost:2780/').then((res) => res.data)

    return data
}

export const animals = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['animals'],
        queryFn: axiosAnimals,
    })
    
    return { isLoading, isError, data, error }
}