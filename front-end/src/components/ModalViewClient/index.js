import './styles.css';
import Close from '../../assets/img/close.png';


function ModalViewClient({ closeViewModal, client }) {

    return (

        <div className='container-modal'>

            <div className='content-modal-view-client'>

                <div className='container-img'>
                    <img src={Close}
                        alt='icon close'
                        className='icon-close-cliente'
                        onClick={() => closeViewModal(false)}
                    />
                </div>

                <div>

                    <h2>{client.nome}</h2>
                    <p>CPF: {client.cpf}</p>
                    <p>TELEFONE: {client.telefone}</p>
                    <p>CEP: {client.cep}</p>
                    <p>COMPLEMENTO: {client.complemento}</p>
                    <p>RUA: {client.rua}</p>
                    <p>BAIRRO:{client.bairro}</p>
                    <p>CIDADE: {client.cidade}</p>
                    <p>ESTADO: {client.estado}</p>

                </div>



            </div>
        </div >

    );
}

export default ModalViewClient;
