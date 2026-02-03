import { useState, useEffect } from "react";
import axios from "axios";

import { useLoading } from "../contexts/LoadingContext";

const API_KEY = "beb130d8ffb17fca0487925c3cb0be44";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

export default function useReviews(movieId) {
  const [reviews, setReviews] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${BASE_URL}${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
        );
        setReviews(data.results);
      } catch (error) {
        console.log("Error Fetching Reviews: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return { reviews };
}
