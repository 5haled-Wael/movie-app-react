import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../contexts/LoadingContext";

export default function useMovie() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  const { setLoading } = useLoading();

  useEffect(() => {
    window.scrollTo(0, 0);

    const getMovieDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=beb130d8ffb17fca0487925c3cb0be44`,
        );
        setMovieDetails(response.data);
      } catch (err) {
        console.log("Error From Fetch Movie Details : ", err);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id, setLoading]);

  return { movieDetails };
}
