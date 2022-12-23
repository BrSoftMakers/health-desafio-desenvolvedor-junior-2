import { useEffect, useRef } from 'react';
import axios from "./axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
	</div>
  )
}

export default App
