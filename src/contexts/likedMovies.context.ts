import { createContext, useContext } from 'react';

interface LikedMoviesContextType {
  name: string;
}

export const MoviesContext = createContext<LikedMoviesContextType | null>(null);

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    //TODO: check what to do when no context are provided
  }
  return context;
};
