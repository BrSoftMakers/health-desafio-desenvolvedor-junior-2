import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const NavbarContainer = styled.nav`
	width: 100vw;
	max-width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 50px;
	color: #000;
	box-shadow: 0 -2px 10px 0 rgb(0,0,0,15%);
	margin-bottom: 3rem;

	@media (max-width: 768px){
		padding: 0px 20px;
	}
`;

export const LogoNameWrapper = styled.div`
	letter-spacing: .1rem;
	font-size: 24px;

	span {
		font-weight: 700;
	}
`;

export const NavLinksWrapper = styled.div`
	display: flex;
	gap: 10px;
	font-weight: 600;
`;

export const NavLinks = styled(Link)`
	text-decoration: none;
	color: #000;

	&:active{
		color: #ccc;
	}

	&:hover{
		opacity: 0.8;
	}
`;
