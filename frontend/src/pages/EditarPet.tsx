import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pet from "../interfaces/pet.interface";
import "../styles/form.css";
import formatTelephone from "../utils/formatTelephone";

function EditarPet() {
	const navigate = useNavigate()

	const [datas, setDatas] = useState<Pet>();

	const [searchParams] = useSearchParams();
	const [error, setError] = useState<String>();

	const { register, handleSubmit } = useForm<Pet>();

	useEffect(() => {
		async function getDataAndInsertInInputs() {
			setDatas(await getPetData(parseInt(searchParams.get("id")!)));
		}

		getDataAndInsertInInputs();
	}, []);

	async function getPetData(id: number) {
		try {
			const petDatas = await axios.get(`/api/getPetWithId/?id=${id}`);

			return petDatas.data;
		} catch (error) {
			setError(
				`Não foi possível buscar as informações, contacte o desenvolvedor. ${error}`
			);
		}
	}

	async function editPet(data: Pet) {
		try {
			if (data) {
				const petEdit = await axios.put("/api/editPet", {
					id: searchParams.get("id"),
					nome: data.nome,
					idade: data.idade,
					especie: data.especie,
					raca: data.raca,
					nomeDono: data.nomeDono,
					telefoneDono: data.telefoneDono
				});

				if (petEdit.data.updated) {
					navigate("/");
				}
			}
		} catch (error) {
			setError(
				`Não foi possível buscar as informações, contacte o desenvolvedor. ${error}`
			);
		}
	}

	return (
		<>
			<h1>Editar Pet</h1>

			<hr />

			<form onSubmit={handleSubmit(editPet)}>
				<input
					type="text"
					defaultValue={datas?.nome}
					{...register("nome")}
					placeholder="Nome*"
					required
				/>

				<input
					type="number"
					defaultValue={datas?.idade}
					minLength={1}
					placeholder="Idade*"
					min={0}
					{...register("idade")}
					required
				/>

				<div className="selectContainer">
					<select defaultValue={datas?.especie} {...register("especie")}>
						<option value="c">Cachorro</option>
						<option value="g">Gato</option>
					</select>
				</div>

				<input
					type="text"
					defaultValue={datas?.raca}
					{...register("raca")}
					placeholder="Raça*"
					required
				/>
				<input
					type="text"
					defaultValue={datas?.nomeDono}
					{...register("nomeDono")}
					placeholder="Nome do Dono*"
					required
				/>
				<input
					type="tel"
					defaultValue={datas?.telefoneDono}
					{...register("telefoneDono")}
					placeholder="Telefone de Contato*"
					minLength={11}
					maxLength={11}
					onBlur={(e) => e.target.value = formatTelephone(e.target.value)}
					required
				/>

				<button>editar</button>

				<span className="errorSpan">{error}</span>
			</form>
		</>
	);
}

export default EditarPet;
