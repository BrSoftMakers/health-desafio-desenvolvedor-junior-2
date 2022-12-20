import './styles.css';
import View from '../../assets/img/view.png';
import Edit from '../../assets/img/edit.png';
import Delete from '../../assets/img/trash.png';
import { useState } from 'react';
import AddNewClient from '../ModalAddClient';
import ModalDelete from '../ModalDeleteClient';
import EditModalClient from '../ModalEditClient'
import ModalViewClient from '../ModalViewClient';
import { getItem } from '../../utils/storage';
import api from '../../services/api';



function Table({ clientes }) {
    const [client, setClient] = useState('');

    const [addNewPet, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);

    const token = getItem('token');


    async function handleViewClient(id) {

        try {
            const response = await api.get(`/clientes/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setClient(response.data);
        } catch (error) {

        }

    }


    return (

        <div className='container-general'>

            <div className='content-btn'>
                <button onClick={() => setAddModal(true)}>+ Add</button>
            </div>

            <div className='container-table'>
                {addNewPet ? <AddNewClient closeModalAdd={setAddModal} /> : false}
                {deleteModal ? <ModalDelete client={client} closeDelModal={setDeleteModal} /> : false}
                {editModal ? <EditModalClient client={client} closeEditModal={setEditModal} /> : false}
                {viewModal ? <ModalViewClient client={client} closeViewModal={setViewModal} /> : false}


                <table border='0' className='table'>
                    <thead className='content-thead'>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {clientes.map((client) => (
                        <tbody className='content-tbody' key={client.id}>
                            <tr>
                                <td>{client.id}</td>
                                <td>{client.nome}</td>
                                <td>{client.cpf}</td>
                                <td>{client.telefone}</td>
                                <td>
                                    <button onClick={() => handleViewClient(client.id)}>
                                        <img
                                            src={View}
                                            alt='View'
                                            title='Visualizar'
                                            onClick={() => setViewModal(true)}
                                        />
                                    </button>

                                    <button onClick={() => handleViewClient(client.id)}>
                                        <img
                                            src={Edit}
                                            alt='Edit'
                                            title='Editar'
                                            onClick={() => setEditModal(true)}
                                        />
                                    </button>

                                    <button onClick={() => handleViewClient(client.id)}>
                                        <img
                                            src={Delete}
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
        </div>

    );
}

export default Table;
