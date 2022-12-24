import { useForm } from "react-hook-form";

interface Users {
    nome: string,
    telefone: string,
    endereco: string
}

function CadastrarUsuario() {
    const {register, handleSubmit} = useForm<Users>();

    async function fetchUserInBackend(data: Users) {
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
            
        }
    }

    return (
        <form action="post" onSubmit={handleSubmit(fetchUserInBackend)}>
            <label htmlFor="nome">Nome:</label>
            <input id="nome" type="text" {...register("nome")}/>

            <label htmlFor="telefone">Telefone:</label>
            <input id="endereco" type="tel" {...register("endereco")}/>
           
            <label htmlFor="endereco">Endereço:</label>
            <input id="endereco" type="text" {...register("telefone")}/>
            
            <button>Cadastrar</button>
        </form>
    );
}

export default CadastrarUsuario;