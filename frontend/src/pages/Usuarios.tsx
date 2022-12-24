import { Link } from "react-router-dom";

function Usuarios() {
    
    async function getAllUsers() {
        const req = await fetch("http://localhost:5000/api/usuarios");
    }

    return (
        <>
            <table>
                <tbody>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
            </table>
            <div className="addButton">
                <Link to="/cadastrarUsuario">+</Link>
            </div>
        </>
    );
}

export default Usuarios;