export default function LibraryReducer(state, action) {
  switch (action.type) {
    case "SET_TYPE":
      return { ...state, type: action.payload };

    case "SET_WATCH_FILTER":
      return { ...state, watchFilter: action.payload };

    case "LOAD_MOVIES":
      return { ...state, movies: action.payload };

    case "ADD_FAVORITE":
      return { ...state, movies: [...state.movies, action.payload] };

    case "ADD_WATCHLIST":
      return {
        ...state,
        movies: [...state.movies, { ...action.payload, watched: false }],
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        movies: state.movies.filter((m) => m.id !== action.payload),
      };

    case "REMOVE_WATCHLIST":
      return {
        ...state,
        movies: state.movies.filter((m) => m.id !== action.payload),
      };

    default:
      return state;
  }
}
