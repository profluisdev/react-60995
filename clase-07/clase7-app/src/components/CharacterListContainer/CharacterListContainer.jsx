import { useEffect, useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { Button } from "../Button/Button";

export const CharacterListContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(40);

  const getCharacters = async () => {
    try {
      const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
      const data = await resp.json();
      console.log(data.results);
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNexPage = () => {
    if(page === 42) {
        return setPage(42);
    }
    setPage(page + 1);
  };

  const handleNexPrev = () => {
    if (page === 1) {
      setPage(1);
      return;
    }
    setPage(page - 1);
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  return (
    <div className="container d-flex flex-column align-items-center">
      <CharacterList characters={characters} />
      <div className="mt-2">
        {page > 1 && (
          <Button text="Atrás" variant="btn-dark" functionClick={handleNexPrev} />
          )}
        <strong> Página {page} </strong>
          { page < 42 && <Button text="Siguiente" variant="btn-dark" functionClick={handleNexPage} />  }

      </div>
    </div>
  );
};
