import React, {useState, useContext} from 'react';
import '../../Styles/bootstrap.min.css';

//contex
import { ItemContext } from '../cartContext/CartContext';


const ItemCount = ({onadd, stock, data, precio}) => {
    const {items, setItems, addItem} = useContext(ItemContext);
    const [counter, setCounter] = useState(1);
    const handelerCounterUp = () =>{
        if (counter < stock) {
            setCounter(counter + 1);
        } else {
            alert("No hay mas stock del Item")
        }
    }
    const handelerCounterDown = () =>{
        if (counter > 1) {
            setCounter(counter - 1);
        } else {
            alert("No se puede agregar un elemento vacio")
        }
    }

    const ejecutarDos = () => {
        onadd();
        addItem(data.id, counter, data.login,precio)
    }

    return(
        <div className='counterSection'>
            <button onClick={handelerCounterUp} className='btn btn-outline-primary'>+</button>
            <span style={{padding:10}}>{counter}</span>
            <button onClick={handelerCounterDown} className='btn btn-outline-primary'>-</button>
            <button className='btn btn-primary' onClick={() => ejecutarDos()} style={{marginLeft:10}} >Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;