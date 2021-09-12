import './NavBar.css';


function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 fixed-top " >

          <a className="navbar-brand ml-lg-5" href="www.google.com">Mi tienda virtual</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="www.google.com">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.google.com">Sobre nosotros</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="www.google.com">Mi carrito</a>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0 ">
              <input className="form-control mr-sm-2 " type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-light my-2 my-sm-0 btn-search" type="submit">Buscar</button>
            </form>

          </div>

      </nav>
    </div>
  );
}



export default NavBar;
