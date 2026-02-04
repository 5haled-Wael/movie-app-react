import { useState, useEffect } from "react";
import axios from "axios";
import { useLoading } from "../contexts/LoadingContext";

const API_KEY = "beb130d8ffb17fca0487925c3cb0be44";
const BASE_URL = "https://api.themoviedb.org/3/person/popular?api_key=";

export default function useTopActors() {
  const [topActors, setTopActors] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    const fetchTopActors = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          `${BASE_URL}${API_KEY}&language=en-US&page=1`,
        );
        setTopActors(data.data.results);
      } catch (error) {
        console.log("Error Fetching Top Actors: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopActors();
  }, []);

  return { topActors };
}
