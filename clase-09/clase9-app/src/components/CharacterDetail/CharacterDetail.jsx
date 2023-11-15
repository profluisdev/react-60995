import { Link } from "react-router-dom";

export const CharacterDetail = ({ name, species, location, image, gender }) => {
  return (
    <div className="p-5 border border-3 rounded-4">
      <div className="d-flex justify-content-center">
        <img src={image} alt="" />
      </div>
      <div className="d-flex flex-column">
        <p>Nombre: {name} </p>
        <p>Especie: {species} </p>
        <p>Genero: {gender} </p>
        <p>Planeta: {location.name} </p>
      </div>
      <Link to="/">
        <button className="btn btn-dark">Volver</button>
      </Link>
    </div>
  );
};
