import { FocusEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

interface UserDatas {
    nome: string,
    telefone: string,
    endereco: string
}

function EditarUsuario() {
	const route = useNavigate();

	const [userData, setUserData] = useState<UserDatas>({nome: "", telefone: "", endereco: ""});
    const [error, setError] = useState<String>()

    const {register, handleSubmit} = useForm<UserDatas>();
    const [searchParams] = useSearchParams();



	const id = searchParams.get("id")!;

	useEffect(() => {
		getUserDatas(parseInt(id));
	}, []);
	
    async function getUserDatas(id: number) {
        try {

            const req = await fetch("http://localhost:5000/api/usuarios", {
                method: "POST",
                body: JSON.stringify({id}),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const res = await req.json();

			setUserData({
				nome: res.Users.nome,
				telefone: res.Users.telefone.replace(/[^\d]/g, "").replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"),
				endereco: res.Users.endereco
			});

        } catch (error) {
            setError("Falha ao buscar informações, tente novamente ou contacte o desenvolvedor");
        }
        
    }

    async function editUserInBackend(data: UserDatas) {
		console.log(data);
		
		try {

			if (!data.nome.trim() && !data.telefone.trim() && !data.endereco.trim()) {
				data.nome = userData.nome;
				data.telefone = userData.telefone;
				data.endereco = userData.endereco;
			}
			const req = await fetch("http://localhost:5000/api/editarUsuario", {
				method: "POST",
				body: JSON.stringify({
					id,
					nome: data.nome,
					telefone: data.telefone,
					endereco: data.endereco
				}),
				headers: {
					"Content-Type": "application/json"
				}
			});

			const res = await req.json();

			if (res.edit) {
				route("/usuarios");
			}
			
		} catch (error) {
			
		}
    }

    function formatTelephone(event: FocusEvent<HTMLInputElement, Element>) {
		event.currentTarget.value = event.currentTarget.value.replace(/[^\d]/g, "").replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
	}

    return (
        <form action="post" onSubmit={handleSubmit(editUserInBackend)}>
            <h1>Editar Usuário</h1>

            <input id="nome" defaultValue={userData.nome} type="text" {...register("nome")} required placeholder="Nome*" />
            
            <input id="telefone" defaultValue={userData.telefone} type="tel" minLength={11} maxLength={11} min={11}  placeholder="Telefone*" {...register("telefone")} onBlur={(e) => {formatTelephone(e)}} required/>
           
            <input id="endereco" defaultValue={userData.endereco} type="text" {...register("endereco")} required placeholder="Endereço*" />
            
            <button>Editar</button>

            <span className="errorSpan">{error}</span>
        </form>
    );    
}

export default EditarUsuario;