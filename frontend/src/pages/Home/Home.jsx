import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import './home.css'

import bgCatDog from '../../images/bg-cat-dog.png'

import HeaderMain from '../../components/HeaderMain/HeaderMain'

function Home() {

    return(

        <div>

            <HeaderMain />

            <main>
                <div className='banner'>
                    <div className='container__left--banner'>
                        <h1>Cuidamos do seu pet <br /> como se fosse nosso filho</h1>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Qui a aut, blanditiis iure voluptas eligendi iusto earum adipisci
                            corporis aperiam praesentium eaque tempore animi cumque alias, temporibus,
                            eum saepe enim!</h5>
                        <div className="btn-newPost" >
                            <Link to="/post" >
                                <button>Fazer cadastro</button>
                            </Link>
                        </div>
                    </div>
                    <div className='container__right--banner'>
                        <img src={bgCatDog} alt="image" />
                    </div>
                </div>
            </main>

            <div className='container__text'>
                <div>
                    <h2>Lorem Ipsum</h2>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam voluptatum repudiandae qui iusto cupiditate culpa
                        perspiciatis aspernatur officia unde neque? Nihil omnis expedita
                        tenetur voluptas et veritatis minus eveniet perferendis!
                    </h5>
                </div>
            </div>
            
        </div>
    )
}

export default Home