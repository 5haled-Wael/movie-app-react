// API IMPORTS
import axios from "axios";
import { useEffect, useState } from "react";

import { useLoading } from "../contexts/LoadingContext";

export default function useMovies() {
  const { setLoading } = useLoading();

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=beb130d8ffb17fca0487925c3cb0be44&language=en-US&page=${page}`,
        );

        setMovies((prev) => [...prev, ...response.data.results]);
      } catch (err) {
        setError(err);
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    };

    fetchMovies();
  }, [page]);

  return { movies, error, setPage };
}
