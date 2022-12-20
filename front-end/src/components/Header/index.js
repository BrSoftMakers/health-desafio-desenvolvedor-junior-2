import './styles.css';
import { getItem } from '../../utils/storage';


function Header({ title }) {
    const userName = getItem('userName');


    return (
        <header className='content-hearder-main'>
            <div className='userName'>
                <h2>Bem-vindo: <span>{userName}</span></h2>
            </div>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;
