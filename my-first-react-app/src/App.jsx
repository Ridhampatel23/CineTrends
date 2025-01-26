import React, { useState, useEffect } from 'react';
import Search from './components/Search.jsx';
import axios from 'axios';
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MovieCard.jsx";
import {useDebounce} from "react-use";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    // Debounce the search term to prevent too many API calls which can cause performance issues and cost a lot
    useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

    // Use Axios for fetching
    const fetchMovies = async (query = '') => {
        setIsLoading(true);
        setErrorMessage('');

        try {
            // Build the endpoint
            const endpoint = query
                ?  `${API_BASE_URL}/search/movie?query=${encodeURI(query)}`
                :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

            // Make the axios call
            const response = await axios.get(endpoint, {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`,
                },
            });

            // Axios stores response data in `response.data`
            const data = response.data;

            // Check for the presence of `Response === 'False'` if that's your API's error pattern
            if (data.Response === 'False') {
                setErrorMessage(data.Error || 'Failed to fetch movies.');
                setMovieList([]);
            } else {
                setMovieList(data.results || []);
            }
        } catch (error) {
            console.error(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(debouncedSearchTerm);
    }, [debouncedSearchTerm]); // Fetch movies once on component mount and whenever `searchTerm` changes

    return (
        <main>
            <div className="pattern" />
            <div className="wrapper">
                <header>
                    <img src="./hero.png" alt="Hero Banner" />
                    <h1>
                        Find <span className="text-gradient">Movies</span> you&apos;ll Enjoy Without Hassle
                    </h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>

                <section className="all-movies">
                    <h2 className="mt-[40px]">All Movies</h2>
                    {isLoading ? (
                        <Spinner />
                    ) : errorMessage ? (
                        <p className="text-red-500">{errorMessage}</p>
                    ) : (
                        <ul>
                            {movieList.map((movie) => (
                                <MovieCard key={movie.id} movie={movie}/>

                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </main>
    );
};

export default App;
