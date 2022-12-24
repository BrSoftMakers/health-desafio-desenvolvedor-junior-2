import { useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
	const navigationRef = useRef<HTMLElement>(null);

	function openHamburguerMenu() {
		navigationRef.current!.style.left === "0px" ?
		navigationRef.current!.style.left = "-100%" :
		navigationRef.current!.style.left = "0px";

		
	}

	

  return (
    <div className="container">
		<header>
			<div className="hamburguerMenu" onClick={() => {openHamburguerMenu()}}>
				<FontAwesomeIcon icon={faBars}/>
			</div>
			<nav className="navigation" ref={navigationRef}>
				<ul>
					<li>Clientes</li>
					<li>Pets</li>
				</ul>
			</nav>
		</header>
		
		<main>
			<Outlet />
			<Link to="/cadastrarUsuario">+</Link>
		</main>
	</div>
  )
}

export default App;
