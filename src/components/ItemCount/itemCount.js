import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/bootstrap.min.css';


const ItemCount = ({onadd}) => {
    /* const [counter, setCounter] = useState(0);
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
    } */

    return(
        <div className='counterSection'>
            {/* <button onClick={handelerCounterUp} className='btn btn-outline-primary'>+</button>
            <span style={{padding:10}}>{counter}</span>
            <button onClick={handelerCounterDown} className='btn btn-outline-primary'>-</button> */}
            <Link to={'/cart'}>
                <button className='btn btn-primary' onClick={onadd} >Agregar al carrito</button>
            </Link>
            
        </div>
    );
}

export default ItemCount;