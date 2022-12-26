import { Link } from "react-router-dom";

function Pets() {
    return (
        <>
            <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Espécie</th>
                            <th>Raça</th>
                            <th>Dono</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                    </tbody>
            </table>
            <div className="addButton">
                <Link to="/cadastrarPet">+</Link>
            </div>
        </>
    );
}

export default Pets;