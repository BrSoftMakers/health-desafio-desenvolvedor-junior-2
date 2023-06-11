import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import './feed.css'

import HeaderMain from '../../components/HeaderMain/HeaderMain'

function Feed() {

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/api/cadastros/")
        .then((response) => {
            setPosts(response.data)
        })

        .catch(() => {
            console.log("Deu errado")
        })

    }, [])

    function deletePost(id) {

        axios.delete(`http://localhost:8080/api/cadastros/${id}`)

        setPosts(posts.filter(post => post.id !== id ))

    }


    return(

        <div>

            <HeaderMain />

            <main>
                <div className="cards">

                    {posts.map((post, key) => {

                        return(
                            
                            <div className="card" key={key} >

                                <div className='title__card'>
                                    <h2>Nome do pet: {post.nome}</h2>
                                    <h2>Idade: {post.idade}</h2>
                                    <h2>Tipo: {post.tipo}</h2>
                                    <h2>Raça: {post.raca}</h2>
                                    <h2>Nome do Dono: {post.nomedono}</h2>
                                    <h2>Telefone: {post.telefone}</h2>
                                </div>

                                <div className="btns" >
                                    <div className="btn-edit" >
                                        <Link to={{ pathname: `/edit/${post.id}` }} >
                                            <button>Editar</button>
                                        </Link>
                                    </div>

                                    <div className="btn-readmore" >
                                    <Link to={{pathname: `/lermais/${post.id}` }} >
                                            <button>Visualizar</button>
                                        </Link>
                                    </div>

                                    <div className="btn-delete" >
                                        <button onClick={() => deletePost(post.id) }>Deletar</button>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                </div>
            </main>
        </div>
    )
}

export default Feed