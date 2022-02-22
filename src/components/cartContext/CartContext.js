import React, {createContext, useState} from 'react';

export const ItemContext = createContext();

const initalState = [];

export const ItemsProvider = ({children}) => {
    const [items, setItems] = useState(initalState);
    const [carrito, setCarrito] = useState(0);
    const [total, setTotal] = useState(0);
    const addItem = (id, cantidad, item, costo) =>{
        const newItem = {
            cartId: id,
            pedido: cantidad, 
            nombre: item,
            precio: costo
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
        setCarrito(carrito + cantidad);
        setItems([...items]);
    }


    const removeItem = (itemId) =>{
        const removido = items.filter((item) => item.cartId !== itemId);
        setItems(removido);

        const encontrado = items.find(
            (item) => item.cartId === itemId
        );

        setCarrito(carrito - encontrado.pedido);
        setCarrito(carrito - (encontrado.precio * encontrado.pedido));
    }


    const clear = () => {
        setItems([]);
        setCarrito(0);
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
        if (carrito > 0) {
            return true;
        } else {
            return false;
        }
    }

    return(
        <ItemContext.Provider value={{items, setItems, addItem, removeItem, clear, isInCart, carrito, carritoEsCero, total}}>
            {children}
        </ItemContext.Provider> 
    );
};