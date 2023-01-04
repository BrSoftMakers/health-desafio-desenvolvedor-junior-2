import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Pet from "../interfaces/pet.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/App.css";
import changeInputType from "../utils/changeInputType";
import formatTelephone from "../utils/formatTelephone";

function App() {
	let petsBruteDatas: Pet[] = [];

	const navigate = useNavigate();
	const [petsDatas, setPetsDatas] = useState<JSX.Element[]>();

	const selectInput = useRef<HTMLSelectElement>(null);

	useEffect(() => {
		async function getDatasAndInsertInTable() {
			const datas = await getAllPets();

			petsBruteDatas = datas;

			insertDatasInTable(petsBruteDatas);
		}

		getDatasAndInsertInTable();
	}, [setPetsDatas]);

	function insertDatasInTable(datas: Pet[]) {
		const petsElementArray: JSX.Element[] = [];

		datas.forEach((data: Pet, i: number) => {
			petsElementArray.push(
				<tr key={`row${i}`}>
					<td
						key={`edit${i}`}
						onClick={() => {
							navigate(`/editarPet/?id=${data.id}`);
						}}
					>
						<FontAwesomeIcon icon={faEdit} className="actionIcons" />
					</td>

					<td key={`nome${i}`}>{data.nome}</td>
					<td key={`idade${i}`}>{data.idade}</td>
					<td key={`especie${i}`}>{data.especie === "g" ? "Gato" : "Cão"}</td>
					<td key={`raca${i}`}>{data.raca}</td>
					<td key={`nomeDono${i}`}>{data.nomeDono}</td>
					<td key={`telefoneDono${i}`}>{formatTelephone(data.telefoneDono)}</td>

					<td
						key={`delete${i}`}
						onClick={() => {
							deletePet(data.id);
						}}
					>
						<FontAwesomeIcon icon={faTrash} className="actionIcons" />
					</td>
				</tr>
			);
		});
		setPetsDatas(petsElementArray);
	}

	async function getAllPets() {
		const datas = (await axios.get("/api/pets")).data;
		return datas;
	}

	function removeDeletedRegister(id: number) {

		return petsBruteDatas.filter((data) => {
			return data.id != id;
		});
	}

	async function deletePet(id: number) {
		const datas = (await axios.delete(`/api/deletePet?id=${id}`)).data;

		if (datas.deleted) {
			const datas = removeDeletedRegister(id);
			console.log();

			insertDatasInTable(datas);
		}
	}

	async function filterPets(query: string) {

		if (petsBruteDatas.length === 0) {
			const datas = (await getAllPets());

			petsBruteDatas = datas;
		}

		const searchType = selectInput.current?.value;


		const filteredDatas = petsBruteDatas.filter((data) => {
			if (searchType === "nome") {
				return data.nome.includes(query);

			}
			else if (searchType === "idade") {

				return data.idade.toString().includes(query);
			}
			else if (searchType === "especie") {

				if (/g|a|t|o/gi.test(query)) {
					return data.especie == "g";
				}

				else if (/c|a|h|o|r/gi.test(query)) {
					return data.especie == "c";
				}

				return data.especie.includes(query);	
			}

			else if (searchType === "raca") {

				return data.raca.includes(query);
			}

			else if (searchType === "nomeDono") {

				return data.nomeDono.includes(query);
			}
			else if (searchType === "telefoneDono") {

				return data.telefoneDono.includes(query);

			}
		});

		insertDatasInTable(filteredDatas);

	}

	return (
		<main>
			<h1>Pets</h1>

			<hr />

			<div className="searchFilters">
				<h3>Filtrar Por:</h3>
				<input
					type="text"
					onChange={async (e) => await filterPets(e.target.value)}
					onFocus={(e) => changeInputType(e, selectInput)}
				/>

				<div className="selectContainer">
					<select ref={selectInput}>
						<option value="nome">Nome</option>
						<option value="idade">Idade</option>
						<option value="especie">Espécie</option>
						<option value="raca">Raça</option>
						<option value="nomeDono">Nome do Dono</option>
						<option value="telefoneDono">Telefone</option>
					</select>
				</div>
			</div>

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

				<tbody>{petsDatas}</tbody>
			</table>
			<div className="addButton">
				<Link to="/cadastrarPet">+</Link>
			</div>
		</main>
	);
}

export default App;
