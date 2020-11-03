import React, { useEffect, useState } from 'react'
import axios from './axios';
import './Row.css';

// baseURL from the images movies in tmdb
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {

    // states
    const [movies, setMovies] = useState([]);

    // hooks (using variable outside de useEffect(fetchUrl), needs to be inside the block[], because useEffects needs to know when this change to get result properly)
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);

            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // LOG's test
    // console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} 
                    />
                ))}
            </div>

        </div>
    )
}

export default Row
