import { Navbar } from "react-materialize";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo"> Logo </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/create">Adicionar um novo Pet</Link>
            </li>
            <li>
              <Link to="/create-owner">Adicionar um novo Tutor</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/create">Adicionar um novo Pet</Link>
        </li>
        <li>
          <Link to="/create-owner">Adicionar um novo Tutor</Link>
        </li>
      </ul>
    </>
  );
}
