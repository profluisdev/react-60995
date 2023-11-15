import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="container mt-2 d-flex ">
      <div className="mx-3">
        <h3>APP</h3>
      </div>
      <Link to="/">
        <button className="btn btn-dark mx-2">Home</button>
      </Link>
      <Link to="/characters/alive">
        <button className="btn btn-dark mx-2">Vivos</button>
      </Link>
      <Link to="/characters/dead">
        <button className="btn btn-dark mx-2">Muertos</button>
      </Link>
    </nav>
  );
};
