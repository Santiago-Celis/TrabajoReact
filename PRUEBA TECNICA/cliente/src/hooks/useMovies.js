import { useEffect, useState } from "react"
import { moviesApi } from "../Data/moviesApi"

export const useMovies = () => {

    const [Movie, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {
        const response = await moviesApi.get('../Data/sample.json')
        setMovies( response.entries.data );
    }

    return{
        Movie
    }

}
