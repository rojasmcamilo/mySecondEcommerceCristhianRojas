import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  px-4  " >

          <a className="navbar-brand ml-lg-5" href="www.google.com">Azuleno - Skin Care</a>
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
                <a className="nav-link" href="www.google.com"> <CartWidget/> </a>
              </li>
            </ul>
            
            
          </div>

      </nav>
    </div>
  );
}



export default NavBar;
