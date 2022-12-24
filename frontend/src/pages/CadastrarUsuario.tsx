import { FocusEvent, useState } from "react";
import { useForm } from "react-hook-form";

interface Users {
    nome: string,
    telefone: string,
    endereco: string
}

function CadastrarUsuario() {
	const [error, setError] = useState<String>();
    const {register, handleSubmit} = useForm<Users>();

    function formatTelephone(event: FocusEvent<HTMLInputElement, Element>) {
        event.currentTarget.value = event.currentTarget.value.replace(/[^\d]/g, "").replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
    }

    async function fetchUserInBackend(data: Users) {
        console.log(data);
        
        if (data.nome != "" && data.endereco != "" && data.telefone != "") {
            try {
                
                const req = await fetch("http://localhost:5000/api/cadastrarUsuario", {
                    body: 
                        JSON.stringify({
                        nome: data.nome,
                        telefone: data.telefone,
                        endereco: data.endereco
                    }),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Acess-Control-Allow-Origin": "*"
                    }

                });

                

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
            <label htmlFor="nome">Nome:</label>
            <input id="nome" type="text" {...register("nome")} required/>

            <label htmlFor="telefone">Telefone:</label>
            <input id="telefone" type="tel" minLength={11} maxLength={11} min={11} {...register("endereco")} onBlur={(e) => {formatTelephone(e)}} required/>
           
            <label htmlFor="endereco">Endereço:</label>
            <input id="endereco" type="text" {...register("endereco")} required/>
            
            <button>Cadastrar</button>

            <span className="errorSpan">{error}</span>
        </form>
    );
}

export default CadastrarUsuario;