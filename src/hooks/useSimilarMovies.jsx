import { useState, useEffect } from "react";
import { useLoading } from "../contexts/LoadingContext";
import axios from "axios";

const API_KEY = "beb130d8ffb17fca0487925c3cb0be44";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

export default function useSimilarMovies(movieId) {
  const [similarMovies, setSimilarMovies] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `${BASE_URL}${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`,
        );
        setSimilarMovies(response.data.results);
      } catch (error) {
        console.log("Error Fetching Similer Movies: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarMovies();
  }, [movieId]);

  return { similarMovies };
}
