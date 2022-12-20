import './styles.css';

function Card({ image, namePet, raca, tipo, nomeDono, fone }) {
    return (
        <div className='container-card'>
            <div className='content-card'>
                <ul>
                    <img src={image} alt='Pet' />
                    <li><span>Pet:</span> {namePet}</li>
                    <li><span>Raça:</span> {raca}</li>
                    <li><span>Tipo:</span> {tipo}</li>
                    <li><span>Dono:</span> {nomeDono}</li>
                    <li><span>Telefone:</span> {fone}</li>
                </ul>
            </div>
        </div>

    );
}

export default Card;