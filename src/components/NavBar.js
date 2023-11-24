import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="#">
        <img src="ruta-del-logotipo.png" alt="Logotipo" width="112" height="28" />
      </a>

      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="#">
          Inicio
        </a>
        <a className="navbar-item" href="#">
          Servicios
        </a>
        <a className="navbar-item" href="#">
          Productos
        </a>
      </div>
    </div>
  </nav>
    <div className="navbar-menu">
    <div className="navbar-start">
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="#">
          Categorías
        </a>
        <div className="navbar-dropdown">
          <a href="#" className="navbar-item">Modelo</a>
          <a href="#" className="navbar-item">Versión</a>
          <a href="#" className="navbar-item">Año</a>
        </div>
      </div>
    </div>

    <CartWidget/>
    
  </div>
  </div>
  )
};

export default NavBar;
