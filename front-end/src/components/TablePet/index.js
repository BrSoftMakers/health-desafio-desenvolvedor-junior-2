import './styles.css';
import { useState } from 'react'
import View from '../../assets/img/view.png';
import Edit from '../../assets/img/edit.png';
import Delete from '../../assets/img/trash.png';
import ModalViewPet from '../ModalViewPet';
import EditModalPet from '../ModalEditPet';
import ModalDelete from '../ModalDeletePet';
import AddNewPet from '../ModalAddPet';
import api from '../../services/api';
import { getItem } from '../../utils/storage';


function Table({ pets }) {
    const [pet, setPet] = useState('');

    const [addModal, setAddModal] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const token = getItem('token');

    async function handleviewPet(id) {

        try {
            const response = await api.get(`/pets/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPet(response.data);


        } catch (error) {

        }
    }

    return (
        <div className='container-general'>
            <div className='content-btn'>
                <button onClick={() => setAddModal(true)}>+ Add</button>
            </div>

            <div className='container-table'>
                {addModal ? <AddNewPet closeModalAdd={setAddModal} /> : false}
                {openModal ? <ModalViewPet pets={pet} closeViewModal={setOpenModal} /> : false}
                {editModal ? <EditModalPet pets={pet} closeEditModal={setEditModal} /> : false}
                {deleteModal ? <ModalDelete pets={pet} closeDelModal={setDeleteModal} /> : false}

                <table border='0' className='table'>
                    <thead className='content-thead'>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Raça</th>
                            <th>Tipo</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {pets.map((pet) => (
                        <tbody className='content-tbody' key={pet.id}>
                            <tr>
                                <td>{pet.id}</td>
                                <td>{pet.nome}</td>
                                <td>{pet.raca}</td>
                                <td>{pet.tipo}</td>
                                <td>
                                    <button onClick={() => handleviewPet(pet.id)}>
                                        <img src={View}
                                            alt='View'
                                            title='Visualizar'
                                            onClick={() => setOpenModal(true)}
                                        />
                                    </button>

                                    <button onClick={() => handleviewPet(pet.id)}>
                                        <img src={Edit}
                                            alt='Edit'
                                            title='Editar'
                                            onClick={() => setEditModal(true)}
                                        />

                                    </button>

                                    <button onClick={() => handleviewPet(pet.id)}>
                                        <img src={Delete}
                                            alt='Delete'
                                            title='Excluir'
                                            onClick={() => setDeleteModal(true)}

                                        />
                                    </button>

                                </td>
                            </tr>
                        </tbody>
                    ))}

                </table>

            </div>
        </div >

    );
}

export default Table;
