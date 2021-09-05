import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import { GenreID } from "../interface/GenreID";


export function useAuthGenre(): GenreID {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuthGenre must be within an AuthProvider');
  }

  return context;
}