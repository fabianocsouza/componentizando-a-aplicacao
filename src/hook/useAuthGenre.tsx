import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";


export const useAuthGenre = () => useContext(AuthContext)