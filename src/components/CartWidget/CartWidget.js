import ico from '../../media/CartIco.png';
import React, {useContext} from 'react';

//contex
import { ItemContext } from '../cartContext/CartContext';

import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {items, carrito} = useContext(ItemContext);
    
    return (
        <div>
            <Link to='/cart'>
            <img src={ico} alt="CartIco" style={{padding:5, width:40}} />
            </Link>
            
            <span style={{color: 'white', fontSize:16, padding:5}} >Carrito: {carrito}</span>
        </div>
        
        
    );
};

export default CartWidget;