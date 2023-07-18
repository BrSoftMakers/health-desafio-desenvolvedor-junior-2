import * as C from "./styles";
import { Link } from "react-router-dom";
import { BsSearch, BsCart } from "react-icons/bs";
import { MdPets } from "react-icons/md";
export const Header = () => {
  return (
    <C.Header>
      <nav>
        <MdPets className="nav--icon" />
        <div className="links">
          <Link className="link" to="/pets">
            PETS
          </Link>
          <Link className="link" to="/categories">
            CATEGORIES
          </Link>
          <Link className="link" to="/registernewpet">
            REGISTER NEW PET
          </Link>
        </div>
        <div className="search--icons">
          <BsSearch className="nav--icon" />
          <BsCart className="nav--icon" />
        </div>
      </nav>
      <hr />
    </C.Header>
  );
};
