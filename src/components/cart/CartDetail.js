import React, { useContext } from 'react';
import { ItemContext } from '../cartContext/CartContext';
import '../../Styles/bootstrap.min.css';

const CartDetail = () => {
    const {items, clear, removeItem, isInCart } = useContext(ItemContext);
    
    return (
        <div>
            {console.log(items)}
            <button className='btn btn-danger' onClick={clear}>limpiar carrito</button>
            {items.map((info) => {
                return(
                    <div className='cardBody'>
                        <h2 className='cardTitle'>
                            {info.id} pedidos: {info.pedido}
                        </h2>
                        <p className='cardText'>{info.nombre}</p>
                        <button className='btn btn-danger' onClick={() => console.log(removeItem(1))}>X</button>
                    </div>
                )
            })}
            <button className='btn btn-success' onClick={() => console.log(isInCart(1))}>Esta en el carrito?</button>

        </div>
    )
}

export default CartDetail;