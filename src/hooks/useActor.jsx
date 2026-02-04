import { useState, useEffect } from "react";
import { useLoading } from "../contexts/LoadingContext";

import axios from "axios";

export default function useActor(personId) {
  const [actorDetails, setActorDetails] = useState(null);
  const [actorMovies, setActorMovies] = useState([]);
  const { setLoading } = useLoading();

  const API_KEY = "beb130d8ffb17fca0487925c3cb0be44";
  const BASE_URL = "https://api.themoviedb.org/3/person/";

  useEffect(() => {
    const fetchActor = async () => {
      setLoading(true);
      try {
        const details = await axios.get(
          `${BASE_URL}${personId}?api_key=${API_KEY}&language=en-US`,
        );

        const movies = await axios.get(
          `${BASE_URL}${personId}/movie_credits?api_key=${API_KEY}&language=en-US`,
        );

        setActorDetails(details.data);
        setActorMovies(movies.data.cast);
      } catch (error) {
        console.log("Error Fetching Actor Details: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActor();
  }, [personId]);

  return { actorDetails, actorMovies };
}
