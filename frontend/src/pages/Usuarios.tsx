import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface usersData {
    nome: string,
    telefone: string,
    endereco: string
}

function Usuarios() {
    const [users, setUsers] = useState<Array<JSX.Element>>()
    const usersArray: Array<JSX.Element> = [];

    useEffect(() => {
        
        async function insertUsersinTable() {
            
            const usersDatas = await getAllUsers();
            
            usersDatas.Users.forEach((data: usersData, index: number) => {
                usersArray.push(
                    <tr key={`tr${index}`}>
                        <td key={`nome${index}`}>{data.nome}</td>
                        <td key={`telefone${index}`}>{data.telefone}</td>
                        <td key={`endereco${index}`}>{data.endereco}</td>
                    </tr>
                );
                
            });
            setUsers(usersArray);
        }

        insertUsersinTable();
    }, []);

    async function getAllUsers() {
        try {
            const req = await fetch("http://localhost:5000/api/usuarios", {
                method: "POST",
                    headers: {
                        "Acess-Control-Allow-Origin": "*"
                    }
            });
            const res = await req.json();
            return res;
            

        }
        catch (error) {

        }
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                    </tr>
                    {users}
                </tbody>
            </table>
            <div className="addButton">
                <Link to="/cadastrarUsuario">+</Link>
            </div>
        </>
    );
}

export default Usuarios;