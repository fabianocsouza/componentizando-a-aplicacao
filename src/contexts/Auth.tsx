import { createContext, useState } from "react";
import { GenreID } from "../interface/GenreID";


export const AuthContext = createContext<GenreID>({} as GenreID )

export const AuthProvider: React.FC = ({children}) => {
  const [selectedGenreId, setSelectedGenreId ] = useState(1)
  return (
    <AuthContext.Provider value={{selectedGenreId, setSelectedGenreId}} >
      {children}
    </AuthContext.Provider>
  )
}