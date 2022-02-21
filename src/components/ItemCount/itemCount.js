import React, {useState, useContext} from 'react';
import '../../Styles/bootstrap.min.css';

//contex
import { ItemContext } from '../cartContext/CartContext';


const ItemCount = ({onadd, stock, data}) => {
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

    return(
        <div className='counterSection'>
            {console.log(data.id, counter, data.login)}
            <button onClick={handelerCounterUp} className='btn btn-outline-primary'>+</button>
            <span style={{padding:10}}>{counter}</span>
            <button onClick={handelerCounterDown} className='btn btn-outline-primary'>-</button>
            <button className='btn btn-primary' onClick={() => addItem(data.id, counter, data.login)} style={{marginLeft:10}} >Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;