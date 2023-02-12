import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="logo"></div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Pets">Pets</Link>
        <Link to="/Register">Cadastrar</Link>
      </nav>
    </header>
  );
};
