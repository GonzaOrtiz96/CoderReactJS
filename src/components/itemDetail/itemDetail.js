import React, {useState} from 'react';
import '../../Styles/bootstrap.min.css';
import { Link } from 'react-router-dom';

//components
import ItemCount from '../ItemCount/itemCount';

//contex
import { ItemsProvider } from '../cartContext/CartContext';

//poner el contex aca y no en item count

const ItemDetail = ({datos}) => {
    const [ver, setVer] =useState(false);
    const onAdd = () => {
        setVer(true);
    };
    
    return(
        <div className='card col'>
            <div className='cardBody'>
            <img className='imgFluid' src={datos.img} style={{width:300}} alt='imagen'/>
            <h2 className='cradTitle'>
                {datos.nombre}
            </h2>
            <p>Stock: {datos.stock}</p>
            <p className='cardText'>Precio del producto: ${datos.precio}</p>
            {ver ? null : <ItemCount onadd={onAdd} stock={datos.stock} data={datos}/>}
            <Link to='/cart'>
                {ver && <button className='btn btn-outline-success' style={{margin:10}}>Ir al carrito</button>}
            </Link>
            </div>
        </div>
    );
};

export default ItemDetail;
