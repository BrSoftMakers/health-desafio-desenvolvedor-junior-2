import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import Pet from "../interfaces/pet.interface";
import "../styles/form.css"
import formatTelephone from "../utils/formatTelephone";

function EditarPet() {
	const [searchParams] = useSearchParams();
	const [error, setError] = useState<String>()

    const {register, handleSubmit} = useForm<Pet>();

	useEffect(() => {
		async function getDataAndInsertInInputs() {
			getPetData(parseInt(searchParams.get("id")!));
		}

		getDataAndInsertInInputs();
	}, []);

	async function getPetData(id: number) {
		try {
			const petDatas = await axios.get(`/api/getPet/?${id}`);

			return petDatas;
			
		} catch (error) {
			setError(`Não foi possível buscar as informações, contacte o desenvolvedor. ${error}`);
		}
	}

	function editPet(data: Pet) {
		throw new Error("Function not implemented.");
	}




    return (
        <>
            <h1>Editar Pet</h1>

            <hr />

            <form action="post" onSubmit={handleSubmit(editPet)}>

                <input type="text" {...register("nome")} placeholder="Nome*" required/>

                <input type="number" minLength={1} placeholder="Idade*" min={0} {...register("idade")} required/>
            
            <div className="selectContainer">
                <select defaultValue="c" {...register("especie")}>
                    <option value="c">Cachorro</option>
                    <option value="g">Gato</option>
                </select>
            </div>

            <input type="text" {...register("raca")} placeholder="Raça*" required/>
            <input type="text" {...register("nomeDono")} placeholder="Nome do Dono*" required/>
            <input type="tel"  {...register("telefoneDono")} placeholder="Telefone de Contato*" minLength={11} maxLength={11} onBlur={((e) => {formatTelephone(e)})} required/>

                
                <button>Cadastrar</button>

                <span className="errorSpan">{error}</span>
            </form>
        </>
    );   
}

export default EditarPet;