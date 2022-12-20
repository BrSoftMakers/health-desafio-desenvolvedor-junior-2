import './styles.css';
import Close from '../../assets/img/close.png';


function ModalViewPet({ closeViewModal, pets }) {

    return (

        <div className='container-modal'>
            <div className='content-modal'>

                <div className='container-img'>
                    <img src={Close}
                        alt='icon close'
                        className='icon-close-pet'
                        onClick={() => closeViewModal(false)}
                    />
                </div>

                <div>
                    <h2>{pets.nome}</h2>
                    <p>IDADE: {pets.idade}</p>
                    <p>TIPO: {pets.tipo}</p>
                    <p>RAÇA: {pets.raca}</p>
                    <p>ID DO CLIENTE: {pets.cliente_id}</p>

                </div>



            </div>
        </div >

    );
}

export default ModalViewPet;
