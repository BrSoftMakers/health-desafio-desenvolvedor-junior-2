import { Link } from "react-router-dom";
import './styles.css';
import NotFound from '../../assets/img/not-found.png'

function Error() {
    return (
        <div className="not-found">
            <img src={NotFound} alt='Not Found' />
            <h2>Página não encontrada!</h2>
            <Link to='/'>Voltar!</Link>
        </div>
    );
}

export default Error;
