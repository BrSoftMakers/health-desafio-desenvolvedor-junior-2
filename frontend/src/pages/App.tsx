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
	</>
  )
}

export default App;
