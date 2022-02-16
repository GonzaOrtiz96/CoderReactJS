import React, {useState} from 'react';
import '../../Styles/bootstrap.min.css';
import { Link } from 'react-router-dom';

//components
import ItemCount from '../ItemCount/itemCount';



const ItemDetail = ({datos}) => {
    const [ver, setVer] =useState(false);
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
            <ItemCount onadd={onAdd} stock={7}/>
            {ver && <Link to='/cart'>
                <button className='btn btn-outline-success' style={{margin:10}}>Ir al carrito</button>
            </Link>}
            </div>
        </div>
    );
};

export default ItemDetail;
