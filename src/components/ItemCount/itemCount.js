import React, {useState} from 'react';
import './bootstrap.min.css';


const ItemCount = (props) => {
    const [counter, setCounter] = useState(0);
    const handelerCounterUp = () =>{
        if (counter < props.stock) {
            setCounter(counter + 1);
        } else {
            alert("No hay mas stock del Item")
        }
    }
    const handelerCounterDown = () =>{
        if (counter > 0) {
            setCounter(counter - 1);
        } else {
            alert("No existe el pedido negativo...")
        }
    }
    return(
        <div className='counterSection'>
            <button onClick={handelerCounterUp} className='btn btn-outline-primary'>+</button>
            {<p>{counter}</p>}
            <button onClick={handelerCounterDown} className='btn btn-outline-primary'>-</button>
        </div>
    );
}

export default ItemCount;