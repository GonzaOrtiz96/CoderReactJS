import '../../Styles/bootstrap.min.css'
import '../../Styles/estilos.css'

import React, {useContext} from 'react';

//contex
import { ItemContext } from '../cartContext/CartContext';

//comonents
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';



const NavBar = () => {
    const {carritoEsCero} = useContext(ItemContext);
    return(
        <nav className="sticky-top">
            <ul className="nav nav-pills">
                <Link className="nav-item" to='/'>Inicio</Link>
                <Link className="nav-item" to='/recomendados'>Recomendados</Link>
                <Link className="nav-item" to='/nosotros'>Nosotros</Link>
                <li >{carritoEsCero() && <CartWidget />}</li>
                <li style={{color:'white', fontSize:30}}>Pritanorka</li>
                {carritoEsCero()}
            </ul>
        </nav>
    )
};

export default NavBar;