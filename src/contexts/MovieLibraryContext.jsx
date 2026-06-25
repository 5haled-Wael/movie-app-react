import { createContext, useContext, useReducer, useEffect } from "react";
import LibraryReducer from "../reducers/LibraryReducer";

const initialState = { type: "favorite", watchFilter: "all", movies: [] };
const MovieLibraryContext = createContext();

export function MovieLibraryProvider({ children }) {
  const [state, dispatch] = useReducer(LibraryReducer, initialState);

  // LOAD MOVIES FROM LOCAL STORAGE
  useEffect(() => {
    let movies = JSON.parse(localStorage.getItem(state.type)) || [];

    if (state.type === "watchlist") {
      if (state.watchFilter === "watched") {
        movies = movies.filter((m) => m.watched);
      } else if (state.watchFilter === "notWatched") {
        movies = movies.filter((m) => !m.watched);
      }
    }

    dispatch({ type: "LOAD_MOVIES", payload: movies });
  }, [state.type, state.watchFilter]);

  // CHANGE MOVIES TYPE (FAVORITE, WATCHLIST)
  function setType(type) {
    dispatch({ type: "SET_TYPE", payload: type });
  }

  // CHANGE FILTER
  function setWatchFilter(filter) {
    dispatch({ type: "SET_WATCH_FILTER", payload: filter });
  }

  // ADD TO FAVORITE
  function addToFavorite(movie) {
    const alreadyFav = state.movies.some((m) => m.id === movie.id);
    if (alreadyFav) return;

    const fav = JSON.parse(localStorage.getItem("favorite")) || [];

    if (!fav.some((m) => m.id === movie.id)) {
      localStorage.setItem("favorite", JSON.stringify([...fav, movie]));
      dispatch({ type: "ADD_FAVORITE", payload: movie });
    }
  }

  // ADD TO WATCHLIST
  function addToWatchlist(movie) {
    const alreadyWatch = state.movies.some((m) => m.id === movie.id);
    if (alreadyWatch) return;

    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    if (!watchlist.some((m) => m.id === movie.id)) {
      const newMovie = { ...movie, watched: false };
      localStorage.setItem(
        "watchlist",
        JSON.stringify([...watchlist, newMovie]),
      );
      dispatch({ type: "ADD_WATCHLIST", payload: newMovie });
    }
  }

  // TOGGLE WATCHED
  function toggleWatched(movieId) {
    const updatedMovies = state.movies.map((m) =>
      m.id === movieId ? { ...m, watched: !m.watched } : m,
    );

    const fullWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const updatedFullWatchlist = fullWatchlist.map((m) =>
      m.id === movieId ? { ...m, watched: !m.watched } : m,
    );
    localStorage.setItem("watchlist", JSON.stringify(updatedFullWatchlist));

    let filteredMovies = updatedMovies;
    if (state.watchFilter === "watched") {
      filteredMovies = updatedMovies.filter((m) => m.watched);
    } else if (state.watchFilter === "notWatched") {
      filteredMovies = updatedMovies.filter((m) => !m.watched);
    }
    dispatch({ type: "LOAD_MOVIES", payload: filteredMovies });
  }

  // REMOVE FROM FAVORITE
  function removeFromFavorite(movieId) {
    const fav = JSON.parse(localStorage.getItem("favorite")) || [];
    const updatedFav = fav.filter((m) => m.id !== movieId);

    localStorage.setItem("favorite", JSON.stringify(updatedFav));
    dispatch({ type: "REMOVE_FAVORITE", payload: movieId });
  }

  // REMOVE FROM WATCHLIST
  function removeFromWatchlist(movieId) {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const updatedWatchlist = watchlist.filter((m) => m.id !== movieId);

    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    dispatch({ type: "REMOVE_WATCHLIST", payload: movieId });
  }

  return (
    <MovieLibraryContext.Provider
      value={{
        movies: state.movies,
        type: state.type,
        watchFilter: state.watchFilter,
        setType,
        setWatchFilter,
        addToFavorite,
        addToWatchlist,
        toggleWatched,
        removeFromFavorite,
        removeFromWatchlist,
      }}
    >
      {children}
    </MovieLibraryContext.Provider>
  );
}

export const useMovieLibrary = () => useContext(MovieLibraryContext);
