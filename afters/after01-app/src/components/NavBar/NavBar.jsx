import { UserWidget } from "../UserWidget/UserWidget"

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
        <img src="/img/logo-social.png" alt="" style={{width: "150px"}}/>
        <div>
        <button className="btn btn-success mx-2">Home</button>
        <button className="btn btn-success mx-2">Productos</button>
        <button className="btn btn-success mx-2">Contactos</button>
      </div>
      <UserWidget />
    </nav>
  )
}
