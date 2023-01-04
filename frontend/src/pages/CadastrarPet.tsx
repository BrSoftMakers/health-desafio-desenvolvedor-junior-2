import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import formatTelephone from "../utils/formatTelephone"
import Pet from "../interfaces/pet.interface";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CadastrarPet() {
    const route = useNavigate()
	const [error, setError] = useState<String>();
    const {register, handleSubmit} = useForm<Pet>();


    async function fetchPetInBackend(data: Pet) {
        
        if (data) {
            try {
                const request = await axios.post("/api/cadastrarPet", data, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                const datas = request.data;
                if (datas.created) {
                    route("/");
                }

            } catch (error) {
				setError(`Erro ocorrido ao adicionar, contacte o desenvolvedor. ${error}`);
            }
        }
        else {
			setError("Preencha todos os campos");
        }   
    }

    return (
        <>
            <Link to="/" className="actionIcons close"><FontAwesomeIcon icon={faClose}/></Link>
            <h1>Cadastrar Pet</h1>

            <hr />

            <form action="post" onSubmit={handleSubmit(fetchPetInBackend)}>

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
            <input type="tel"  {...register("telefoneDono")} placeholder="Telefone de Contato*" minLength={11} maxLength={11} onBlur={((e) => e.target.value = formatTelephone(e.target.value))} required/>

                
                <button>Cadastrar</button>

                <span className="errorSpan">{error}</span>
            </form>
        </>
    );
}

export default CadastrarPet;