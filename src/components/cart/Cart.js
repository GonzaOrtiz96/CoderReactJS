import React, { useContext, useState } from 'react';
import { ItemContext } from '../cartContext/CartContext';
import { Link } from 'react-router-dom';
import '../../Styles/bootstrap.min.css';

const Cart = () => {
    const {items, clear, removeItem, carritoEsCero, total } = useContext(ItemContext);
    

    return (
        
        <div>
            {carritoEsCero()? <button className='btn btn-danger' onClick={clear}>limpiar carrito</button> : <p style={{fontSize:50}}>Parece que no has agregado nada al carrito...</p> }
            <Link to='/'>
                {carritoEsCero()?null: <button className='btn btn-success' style={{fontSize:70}}>Al Inicio</button>}
            </Link>
            {items.map((info) => {
                return(
                    <div className='cardBody' key={info.id}>
                        <h2 className='cardTitle'>
                            {info.id} pedidos: {info.pedido}
                        </h2>
                        <p className='cardText'>Nombre del producto: {info.nombre}</p>
                        <p className='cardText'>Precio del producto: {info.precio}</p>
                        <button className='btn btn-danger' onClick={() => removeItem(info.cartId)}>X</button>
                    </div>
                )
            })}
            {carritoEsCero() && <p className='cardTitle'>Total a Pagar: ${total}</p>}
        </div>
    )
}

export default Cart;