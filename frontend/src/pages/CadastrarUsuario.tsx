import { FocusEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface Users {
    nome: string,
    telefone: string,
    endereco: string
}

function CadastrarUsuario() {
    const route = useNavigate()
	const [error, setError] = useState<String>();
    const {register, handleSubmit} = useForm<Users>();

    function formatTelephone(event: FocusEvent<HTMLInputElement, Element>) {
        event.currentTarget.value = event.currentTarget.value.replace(/[^\d]/g, "").replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }

    async function fetchUserInBackend(data: Users) {
        
        if (data.nome && data.telefone && data.endereco) {
            try {
                
                const req = await fetch("http://localhost:5000/api/cadastrarUsuario", {
                    body: 
                        JSON.stringify({
                        nome: data.nome,
                        telefone: data.telefone.replace(/[^\d]/g, "").replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"),
                        endereco: data.endereco
                    }),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Acess-Control-Allow-Origin": "*"
                    }
                });
                route("/usuarios");
                

            } catch (error) {
				setError(`Erro ocorrido ao adicionar, contacte o desenvolvedor. ${error}`);
            }
        }
        else {
			setError("Preencha todos os campos")
        }   
    }

    return (
        <form action="post" onSubmit={handleSubmit(fetchUserInBackend)}>

            <input id="nome" type="text" {...register("nome")} placeholder="Nome*" required/>

            <input id="telefone" type="tel" minLength={11} placeholder="Telefone*" maxLength={11} min={11} {...register("telefone")} onBlur={(e) => {formatTelephone(e)}} required/>
           
            <input id="endereco" type="text" {...register("endereco")} placeholder="Endereço*" required/>
            
            <button>Cadastrar</button>

            <span className="errorSpan">{error}</span>
        </form>
    );
}

export default CadastrarUsuario;