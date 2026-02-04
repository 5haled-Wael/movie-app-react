import { useState, useEffect } from "react";
import { useLoading } from "../contexts/LoadingContext";
import axios from "axios";

export default function useSearchMovies(query) {
  const [result, setResult] = useState([]);
  const { setLoading } = useLoading();

  const API_KEY = "beb130d8ffb17fca0487925c3cb0be44";
  const BASE_URL = "https://api.themoviedb.org/3/search/movie";

  // https://api.themoviedb.org/3/search/movie?api_key=beb130d8ffb17fca0487925c3cb0be44&query=Inception

  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setResult([]);
      return;
    }

    const controller = new AbortController();
    const fetchSearchMovies = async () => {
      setLoading(true);
      try {
        const data = await axios.get(`${BASE_URL}`, {
          params: { api_key: API_KEY, query: query },
          signal: controller.signal,
        });
        setResult(data.data.results);
      } catch (error) {
        console.log("Error fetching Search movies: ", error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchSearchMovies, 400);

    return () => {
      clearTimeout(debounce);
      controller.abort();
    };
  }, [query, setLoading]);

  return { result };
}
