import React, {createContext, useState} from 'react';

export const ItemContext = createContext();

const initalState = [];

export const ItemsProvider = ({children}) => {
    const [items, setItems] = useState(initalState);

    const addItem = (id, cantidad, item) =>{
        const newItem = {
            cartId: id,
            pedido: cantidad, 
            nombre: item
        }
        const encontrado = items.find(
            (item) => item.cartId === id
        );

        if (encontrado) {
            encontrado.pedido += cantidad;
        }else{
            items.push(newItem);
        }
        setItems([...items]);
    }


    const removeItem = (itemId) =>{
        console.log(items);
        console.log(itemId);
        const removido = items.filter((item) => item.cartId !== itemId);
        console.log(removido);
        setItems(removido);
    }


    const clear = () => {
        setItems(initalState);
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

    return(
        <ItemContext.Provider value={{items, setItems, addItem, removeItem, clear, isInCart}}>
            {children}
        </ItemContext.Provider> 
    );
};