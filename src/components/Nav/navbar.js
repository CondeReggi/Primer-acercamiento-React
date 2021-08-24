import React from 'react';
import './navbar.css'

//componente a exportar
const NavbarComponent = () => {
 return <nav className="navegador">
            <h2>DEVELOP</h2>
            <ul className="ulsito">
                <li>INICIO</li>
                <li>PEPE</li>
                <li>MARIA</li>
            </ul>
        </nav>
}

//exportando el componente deseado
export default NavbarComponent;
