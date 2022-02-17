import React, { useContext } from 'react';
import { ItemContext } from '../cartContext/CartContext';
import '../../Styles/bootstrap.min.css';

const CartDetail = () => {
    const [items, setItems] = useContext(ItemContext);
    console.log(items);
    return (
        <div>
            {items.map((info) => {
                return(
                    <div className='cardBody'>
                        <h2 className='cardTitle'>
                            {info.id} pedidos: {info.pedido}
                        </h2>
                        <p className='cardText'>{info.nombre}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CartDetail;