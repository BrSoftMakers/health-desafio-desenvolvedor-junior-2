import {
  LogoNameWrapper,
  NavbarContainer,
  NavLinks,
  NavLinksWrapper,
} from './styles';

import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <LogoNameWrapper>
          <NavLinks to="/">
            Soft<span>PETS</span>
          </NavLinks>
        </LogoNameWrapper>
        <NavLinksWrapper>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/pets">Pets</NavLinks>
          <NavLinks to="/create">Novo Pet</NavLinks>
        </NavLinksWrapper>
      </NavbarContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
