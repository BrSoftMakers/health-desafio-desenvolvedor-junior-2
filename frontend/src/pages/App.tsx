import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pet from '../interfaces/pet.interface'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';

function App() {
	
	const petsDatasArray: JSX.Element[] = [];
	const [petsDatas, setPetsDatas] = useState<JSX.Element[]>();

	useEffect(() => {

		async function getDatasAndInsertInTable() {
			const datas = await getAllPets();

			insertDatasInTable(datas);
		}

		getDatasAndInsertInTable();
	}, [setPetsDatas]);


	function insertDatasInTable(datas: Pet[]) {

		datas.forEach((data: Pet, i: number) => {
			petsDatasArray.push(
				<tr key={`row${i}`}>
					<td key={`edit${i}`}>
						<FontAwesomeIcon icon={faEdit} className="actionIcons" />
					</td>

					<td key={`nome${i}`}>{data.nome}</td>
					<td key={`idade${i}`}>{data.idade}</td>
					<td key={`especie${i}`}>{data.especie}</td>
					<td key={`raca${i}`}>{data.raca}</td>
					<td key={`nomeDono${i}`}>{data.nomeDono}</td>
					<td key={`telefoneDono${i}`}>{data.telefoneDono}</td>

					<td key={`delete${i}`} onClick={() => {deletePet(data.id)}}>
						<FontAwesomeIcon icon={faTrash}  className="actionIcons" />
					</td>
				</tr>
			);
		});
		setPetsDatas(petsDatasArray)
	}

	async function getAllPets() {
		const datas = (await axios.get("/api/pets")).data;

		return datas;
	}

	async function deletePet(id: number) {
		const datas = (await axios.delete(`/api/deletePet/?id=${id}`)).data;
		console.log(datas);
		
	}


  return (
    <main>
		<h1>Pets</h1>

		<hr />

        <table>
        	<thead>
                <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Espécie</th>
					<th>Raça</th>
					<th>Nome do Dono</th>
					<th>Telefone</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
				{petsDatas}
            </tbody>
        </table>
        <div className="addButton">
            <Link to="/cadastrarPet">+</Link>
        </div>
    </main>
  )
}

export default App;
