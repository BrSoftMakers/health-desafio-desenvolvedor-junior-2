import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Usuarios() {
    const [users, setUsers] = useState<Array<JSX.Element>>()
    const usersArray: Array<JSX.Element> = [];

    useEffect(() => {
        
        async function insertUsersinTable() {
            
            
            
            setUsers(usersArray);
        }

        insertUsersinTable();
    }, []);

    

	async function deleteUsers(id: number) {
		try {	
			const req = await fetch("http://localhost:5000/api/deleteUser",{
				method: "POST",
				body: JSON.stringify({id}),
				headers: {
					"Content-Type": "application/json"
				}
			});

			const res = await req.json();

			if (res.deleted) {
				window.location.reload();
			}
			
		}
		catch (error) {

		}


	}
    return (
        <>
            <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
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