import react from "react";
import './targeta.css'
import logo from '../../iamges/lolo.jpg'

import React from 'react'

const TargetPokemon = (props) => {
    return (
        <div className="TargetaPokemon">
            <img id="imagenPokemon" src={logo}></img>
            <div className="ContenidoPokemon">
                <h4>Nombre Pokemon</h4>
                <p>Descripcion breve</p>
            </div>
        </div>
    )
}

export default TargetPokemon;

