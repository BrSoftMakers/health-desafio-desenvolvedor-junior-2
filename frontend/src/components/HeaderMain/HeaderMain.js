import React from 'react'

import { Link } from 'react-router-dom'

import './headerMain.css'

function HeaderMain() {
    return (

        <header>
            <div className="container">
                <Link className="logo" to="/">
                    <h1>Pet</h1>
                    <i color='white' className="fas fa-dog"></i>
                    <i color='white' className="fas fa-cat"></i>
                </Link>

                <div className="btn-newPost" >
                    <Link to="/post" >
                        <button>Fazer cadastro</button>
                    </Link>
                </div>
            </div>
        </header>

    )
}

export default HeaderMain