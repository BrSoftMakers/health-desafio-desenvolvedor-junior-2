import { useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';

function App() {
	const navigationRef = useRef<HTMLElement>(null);

	function openHamburguerMenu() {
		navigationRef.current!.style.left === "0px" ?
		navigationRef.current!.style.left = "-100%" :
		navigationRef.current!.style.left = "0px";

		
	}

	

  return (
    <>
		<header>
			<div className="hamburguerMenu" onClick={() => {openHamburguerMenu()}}>
				<FontAwesomeIcon icon={faBars}/>
			</div>
			<nav className="navigation" ref={navigationRef}>
				<ul>
					<li onClick={() => {openHamburguerMenu()}}><Link to="usuarios">Clientes</Link></li>
					<li onClick={() => {openHamburguerMenu()}}><Link to="pets">Pets</Link></li>
				</ul>
			</nav>
		</header>
		
		<main>
			<Outlet />
		</main>
	</>
  )
}

export default App;
