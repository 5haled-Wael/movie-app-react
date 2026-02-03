import { useState, useEffect } from "react";
import axios from "axios";

// CUSTOM HOOK
import { useLoading } from "../contexts/LoadingContext";

const API_KEY = "beb130d8ffb17fca0487925c3cb0be44";
const BASE_URL = "https://api.themoviedb.org/3";

export default function useCast(movieId) {
  const [cast, setCast] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
        );
        setCast(data.cast);
      } catch (error) {
        console.log("Error fetching cast: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return { cast };
}
