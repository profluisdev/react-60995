import { useParams } from "react-router-dom";
import { useCount } from "../../hooks/useCount";
import { useFetch } from "../../hooks/useFetch";
import { Button } from "../Button/Button";
import { CharacterList } from "../CharacterList/CharacterList";

export const CharacterListContainer = () => {
  const { status } = useParams();

  const { count, increment, decrement } = useCount(1);

  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${status ? `?page=${count}&status=${status}` : `?page=${count}`}`
  );

  return (
    <div className="container d-flex flex-column align-items-center">
      {isLoading ? <h2>Cargando ...</h2> : <CharacterList characters={data.results} />}
      <div className="mt-2">
        {count > 1 && <Button text="Atrás" variant="btn-dark" functionClick={decrement} />}
        <strong> Página {count} </strong>
        {count < 42 && <Button text="Siguiente" variant="btn-dark" functionClick={increment} />}
      </div>
    </div>
  );
};
