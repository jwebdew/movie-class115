
import axios from "axios";
import { useEffect, useState } from "react";
import MovieItem from "./item";



const MovieList = () => {
    const key = 'b5b2bfa647552193be6cb8cfc035fe35';
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        const movieplay = async () => {
            axios.get('https://api.themoviedb.org/3/movie/now_playing', {
                params : {
                    api_key : key,
                    language : 'ko',
                    page : 1,
                    region : 'kr'
                }
            })
            .then(Response => {
                setMovie(Response.data.results)
            })
        }
        movieplay();
    },[])
    return (
        <div className="movie-list">
            {movies.map((moviesMap) => (
                <MovieItem movieInfo = {moviesMap}/>
            ))}
        </div>
    )
}

export default MovieList;