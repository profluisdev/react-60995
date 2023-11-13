import { useEffect, useState } from "react"
import { CharacterDetail } from "../CharacterDetail/CharacterDetail";

export const CharacterDetailContainer = () => {
    const [character, setCharacter] = useState(null); 

    const getCharacter = async (id) => {
        try {
            const resp = await fetch( `https://rickandmortyapi.com/api/character/${id}` );
            const data = await resp.json();
            setCharacter(data);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { 
        getCharacter(1)
     }, [])

  return (
    <div className="container d-flex justify-content-center mt-5">
        { character && <CharacterDetail { ...character } /> }
    </div>
  )
}
