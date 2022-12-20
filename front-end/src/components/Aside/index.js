import './styles.css';
import Logo from '../../assets/img/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { clearItem } from '../../utils/storage';



function Aside() {
    const navigate = useNavigate();


    function hendleLogout() {
        clearItem();
        navigate('/');
    }

    return (
        <aside className='container-aside'>
            <header className='content-header'>
                <img src={Logo} alt='Logo do sistema' className='logo' />
                <nav className='menu'>
                    <ul>
                        <li><Link to='/main'>Dashboard</Link></li>
                        <li><Link to='/clientes'>Clientes</Link></li>
                        <li><Link to='/pets'>Pets</Link></li>
                        <li onClick={() => hendleLogout()}>Sair</li>
                    </ul>
                </nav>
            </header>
        </aside>

    );
}

export default Aside;
