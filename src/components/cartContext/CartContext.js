import React, {createContext, useState} from 'react';

export const ItemContext = createContext();

const initalState = [];

export const ItemsProvider = ({children}) => {
    /* lista de los items en carrito */
    const [items, setItems] = useState(initalState);
    /* indica la cantidad individual de items en el carrito */
    const [cantidadTotalItems, setCantidadTotalItems] = useState(0);
    /* indica el precio total a pagar en el carrito */
    const [total, setTotal] = useState(0);
    const addItem = (id, cantidad, item, costo, imagen) =>{
        const newItem = {
            cartId: id,
            pedido: cantidad, 
            nombre: item,
            precio: costo,
            img: imagen
        }
        const encontrado = items.find(
            (item) => item.cartId === id
        );

        if (encontrado) {
            encontrado.pedido += cantidad;
            setTotal(total + (encontrado.precio * encontrado.pedido));
        }else{
            items.push(newItem);
            setTotal(total + (cantidad * costo));
        }
        setCantidadTotalItems(cantidadTotalItems + cantidad);
        setItems([...items]);
    }


    const removeItem = (itemId) =>{
        const removido = items.filter((item) => item.cartId !== itemId);
        setItems(removido);

        const encontrado = items.find(
            (item) => item.cartId === itemId
        );
        setCantidadTotalItems(cantidadTotalItems - encontrado.pedido);
        setTotal(total - (encontrado.precio * encontrado.pedido));
    }


    const clear = () => {
        setItems([]);
        setCantidadTotalItems(0);
        setTotal(0);
    }


    const isInCart = (id) => {
        const encontrado = items.find(
            (item) => item.cartId === id
        );
        if (encontrado) {
            return true;
        } else {
            return false;
        }
    }

    const carritoEsCero = () => {
        if (cantidadTotalItems > 0) {
            return true;
        } else {
            return false;
        }
    }

    return(
        <ItemContext.Provider value={{items, setItems, addItem, removeItem, clear, isInCart, cantidadTotalItems, carritoEsCero, total}}>
            {children}
        </ItemContext.Provider> 
    );
};