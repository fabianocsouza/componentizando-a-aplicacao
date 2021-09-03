import { useEffect, useState } from "react";
import { useAuthGenre } from "../hook/useAuthGenre";
import { GenreResponseProps } from "../interface/GenreResponseProps";
import { api } from "../services/api";
import { Button } from "./Button";

export function SideBar() {
  
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  const { selectedGenreId, setSelectedGenreId } = useAuthGenre()

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}