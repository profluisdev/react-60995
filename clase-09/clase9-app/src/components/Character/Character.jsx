import { Link } from "react-router-dom";

export const Character = ({ id, name, image }) => {
  return (
    <div className="border border-3 p-3 d-flex flex-column m-2">
      <p>Nombre: {name} </p>
      <img src={image} alt="" />
      <Link to={`/character/${id}`}>
        <button className="btn btn-dark mt-2">Detalle</button>
      </Link>
    </div>
  );
};
