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
    const precio = Math.ceil(Math.random()*1000);
    const onAdd = () => {
        setVer(true);
    };
    
    return(
        <div className='card col'>
            <div className='cardBody'>
            <img className='imgFluid' src={datos.avatar_url} style={{width:300}} alt='imagen'/>
            <h2 className='cradTitle'>
                {datos.login}
            </h2>
            <p className='cardText'>
                URL a su GitHub: <a href={datos.html_url}>{datos.html_url}</a>
            </p>
            <p className='cardText'>Precio del producto: ${precio}</p>
            {ver ? null : <ItemCount onadd={onAdd} stock={Math.ceil(Math.random()*10)} data={datos} precio={precio}/>}
            <Link to='/cart'>
                {ver && <button className='btn btn-outline-success' style={{margin:10}}>Ir al carrito</button>}
            </Link>
            </div>
        </div>
    );
};

export default ItemDetail;
