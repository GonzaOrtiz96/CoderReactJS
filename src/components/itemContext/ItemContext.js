import React, {createContext, useState} from 'react'

export const ItemContext = createContext();

const initalState = [
    {id: 45454, name: 'keyboard dell', price: 20},
    {id: 45458, name: 'mouse dell', price: 10},
    {id: 45459, name: 'samsung monitor', price: 300},
    {id: 45453, name: 'macbook pro', price: 860},
    {id: 45457, name: 'motorola s10', price: 660}
    
];

export const ItemsProvider = ({children}) => {
    const [items, setItems] = useState(initalState);

    return(
        <ItemContext.Provider value={[items, setItems]}>
            {children}
        </ItemContext.Provider> 
    );
};