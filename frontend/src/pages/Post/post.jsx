import React from 'react'
import axios from 'axios'

import { useHistory } from 'react-router-dom'

import HeaderMain from '../../components/HeaderMain/HeaderMain'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { v4 as uuid } from 'uuid';

import './post.css'

const validationPost = yup.object().shape({
    nome: yup.string().required("O nome é obrigatório").max(40, "O nome precisa ter menos de 40 caracteres"),
    idade: yup.number().required("A idade é obrigatória").min(0, "a idade não pode ser negativa").max(30, "A idade máxima é 30"),
    tipo: yup.string().required("O tipo é obrigatório").max(40, "O tipo precisa ter menos de 40 caracteres"),
    raca: yup.string().required("A raça é obrigatória").max(40, "A Raça precisa ter menos de 40 caracteres"),
    nomedono: yup.string().required("O nome é obrigatório").max(40, "O nome precisa ter menos de 40 caracteres"),
    telefone: yup.number().required("O telefone é obrigatória"),
})

function Post() {

    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost = data => console.log(data)


    return(
        <div>
            <HeaderMain />

            <main>
                <div className="card-post" >
                    <h1>Cadastre-se</h1>
                    <div className="line-post" ></div>

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(addPost)} >

                            <h1>Pet</h1>

                            <div className="line-post" ></div>

                            <div className="fields" >
                                <label>Nome do pet</label>
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
                                <input type="text" name="tipo" {...register("tipo")} />
                                <p className="error-message">{errors.tipo?.message}</p>
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

                            <div className="fields" >
                                <input type="text" name="codigo" value={uuid.v4()} {...register("codigo")}  hidden/>
                                <p className="error-message">{errors.codigo?.message}</p>
                            </div>

                            <div className="btn-post">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Post