import { createContext, useState } from "react";

interface GenreID {
  selectedGenreId: number;
  setSelectedGenreId(id: number): void;
}
export const AuthContext = createContext<GenreID>({} as GenreID )

export const AuthProvider: React.FC = ({children}) => {
  const [selectedGenreId, setSelectedGenreId ] = useState(1)
  return (
    <AuthContext.Provider value={{selectedGenreId, setSelectedGenreId}} >
      {children}
    </AuthContext.Provider>
  )
}