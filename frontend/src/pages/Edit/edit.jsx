import React, { useEffect } from 'react'
import axios from 'axios'

import Header from '../../components/Header/Header'

import { useHistory, useParams } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationPost = yup.object().shape({
    nome: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
    idade: yup.number().required("A idade é obrigatória").min(0, "A idade não pode ser negativa").max(30, "A Idade precisa ter menosde 30 caracteres"),
})

function Edit() {

    const { id } = useParams()

    let history = useHistory()

    
    const addPost = data => axios.put(`http://localhost:8080/api/cadastros/${id}`, data)
    .then(() => {
        console.log("Deu tudo certo")
        history.push("/feed")
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationPost)
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/api/cadastros/`+id)
        .then((response) => {
            reset(response.data)
        })
        
    }, [])

    return(
        <div>
            <Header />
            
            <main>

                <div className="card-post" >

                    <h1>Editar Dados</h1>
                    <div className="line-post" ></div>

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(addPost)} >

                            <div className="fields" >
                                <label>Nome</label>
                                <input type="text" name="nome" {...register("nome")} />
                                <p className="error-message">{errors.nome?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Idade</label>
                                <input type="number" name="idade" {...register("idade")} />
                                <p className="error-message">{errors.idade?.message}</p>
                            </div>

                           
                            <div className="fields" >
                                <label>Cachorro ou Gato</label>
                                <select name="tipo" {...register("tipo")}>
                                    <option value="Gato">Gato</option>
                                    <option value="Cachorro">Cachorro</option>
                                </select>
                            </div>

                            <div className="fields" >
                                <label>Raça</label>
                                <input type="text" name="raca" {...register("raca")} />
                                <p className="error-message">{errors.raca?.message}</p>
                            </div>

                            <h1>Dono</h1>

                            <div className="line-post" ></div>

                            <div className="fields" >
                                <label>Nome Completo</label>
                                <input type="text" name="nomedono" {...register("nomedono")} />
                                <p className="error-message">{errors.nomedono?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Telefone</label>
                                <input type="tel" placeholder='99 999999999' name="telefone" {...register("telefone")} />
                                <p className="error-message">{errors.telefone?.message}</p>
                            </div>

                            <div className="btn-post" >
                                <button type="submit" >Enviar</button>
                            </div>

                        </form>

                    </div>

                </div>

            </main>
        </div>
    )
}

export default Edit
