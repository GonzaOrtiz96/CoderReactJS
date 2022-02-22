import ico from '../../media/CartIco.png';
import React, {useContext} from 'react';

//contex
import { ItemContext } from '../cartContext/CartContext';

const CartWidget = () => {
    const {items, carrito} = useContext(ItemContext);
    
    return (
        <div>
            <img src={ico} alt="CartIco" style={{padding:5, width:75}} />
            <span style={{color: 'white', fontSize:30, padding:5}} >Carrito: {carrito}</span>
        </div>
        
        
    );
};

export default CartWidget;