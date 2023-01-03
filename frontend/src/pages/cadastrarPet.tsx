import { FocusEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { petDatas, usersData } from "./interfaces";
import getAllUsers from "./scripts/getAllUsers";

function CadastrarPet() {
    const route = useNavigate()
	const optionsList: Array<JSX.Element> = []
	const [usersList, setUsersList] = useState<Array<JSX.Element>>(); 
	const [error, setError] = useState<String>();
    const {register, handleSubmit} = useForm<petDatas>();

	useEffect(() => {
		
		async function createOptionsDataList() {
			let users = await getAllUsers();

			users.Users.forEach((data: usersData) => {
				optionsList.push(
					<option value={data.nome} key={data.id}/>
				);
			});

			setUsersList(optionsList);
			
		}
		createOptionsDataList();
		
	},[]);


    async function fetchPetInBackend(data: petDatas) {
        
        if (data.nome && data.idade && data.especie, data.raca, data.idUser) {
            try {
                const req = await fetch("http://localhost:5000/api/cadastrarPet", {
                    body: 
                        JSON.stringify({
                        nome: data.nome,
						idade: data.idade,
						especie: data.especie,
						raca: data.raca,
					}),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Acess-Control-Allow-Origin": "*"
                    }
                });
                route("/pets");
                

            } catch (error) {
				setError(`Erro ocorrido ao adicionar, contacte o desenvolvedor. ${error}`);
            }
        }
        else {
			setError("Preencha todos os campos");
        }   
    }

    return (
        <form action="post" onSubmit={handleSubmit(fetchPetInBackend)}>

			<h1>Cadastrar Pets</h1>

            <input id="nome" type="text" {...register("nome")} placeholder="Nome*" required/>

            <input type="number" min={0} required placeholder="Idade*" {...register("idade")} />
			
			
			<div className="radioFields">
				<label>Espécie:</label>
				<div>
					<input type="radio" name="especie" id="cao" defaultChecked/><label htmlFor="cao">Cachorro</label>
				</div>
				<div>
					<input type="radio" name="especie" id="gato" /><label htmlFor="gato">Gato</label>
				</div>
			</div>

			<input type="text" placeholder="Raça*" required {...register("raca")} />
			
			<input type="text" list="user" placeholder="Dono*" required />

			<datalist id="user">
				{usersList} 
			</datalist>

			<input type="tel" placeholder="Telefone" disabled/>
            
            <button>Cadastrar</button>

            <span className="errorSpan">{error}</span>
        </form>
    );
}

export default CadastrarPet;