import './styles.css';
import Close from '../../assets/img/close.png'
import api from '../../services/api';
import { toast } from 'react-toastify'
import { getItem } from '../../utils/storage';

function ModalDeletePet({ closeDelModal, pets }) {

    const token = getItem('token');

    async function handleDelete(id) {

        try {
            const response = await api.delete(`/pets/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            closeDelModal();

            return toast.success('Excuído com Sucesso!', {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message'
            });


        } catch (error) {

        }
    }

    return (
        <div className='container-modal'>

            <div className='content-modal-del'>
                <div className='container-img'>

                    <img src={Close}
                        alt='fechar modal'
                        className='icon-close'
                        onClick={() => closeDelModal(false)}
                    />

                </div>

                <h3>Deseja excluir?</h3>
                <div className='are-btn'>
                    <button className='btn-yes' onClick={() => handleDelete(pets.id)}>Sim</button>
                    <button className='btn-no' onClick={() => closeDelModal(false)}>Não</button>
                </div>
            </div>
        </div >

    );

}

export default ModalDeletePet;
