import React, {createContext, useState} from 'react';

export const ItemContext = createContext();

const initalState = [];

export const ItemsProvider = ({children}) => {
    const [items, setItems] = useState(initalState);

    const addItem = (id, cantidad, item) =>{
        setItems({cartId: {id}, pedido: {cantidad}, nombre: {item}});
    }
    const removeItem = (itemId) =>{
        setItems(items.filter((carritoId) => {
            return carritoId !== itemId;
        }));
    }
    const clear = () => {
        setItems(initalState);
    }
    const isInCart = (id) => {
        items.forEach((cada) => {
            if (cada.id = id){
                return true
            } else {
                return false
            }
        })
    }

    return(
        <ItemContext.Provider value={[items, setItems, addItem, removeItem, clear, isInCart]}>
            {children}
        </ItemContext.Provider> 
    );
};