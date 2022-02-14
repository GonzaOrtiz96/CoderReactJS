import React, {useState} from 'react';
import '../../Styles/bootstrap.min.css';


const ItemCount = (props) => {
    const [counter, setCounter] = useState(0);

    const devuelve = () => {
        return({counter});
    };
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
            <span style={{padding:10}}>{counter}</span>
            <button onClick={handelerCounterDown} className='btn btn-outline-primary'>-</button>
            <button className='btn btn-primary' onClick={() => {
                return({counter})
            }} style={{marginLeft:10}}>Enviar</button>
        </div>
    );
}

export default ItemCount;