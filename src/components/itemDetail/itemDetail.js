import React, {useState, useEffect} from 'react';
import '../../Styles/bootstrap.min.css';

//component
import Item from '../Item/item';


const ItemDetail = ({datos}) => {
    return(
        <div className='card col'>
            <div className='cardBody'>
            <img className='imgFluid' src={datos.avatar_url} style={{width:300}}/>
            <h2 className='cradTitle'>
                {datos.login}
            </h2>
            <p className='cardText'>
                URL a su GitHub: <a href={datos.html_url}>{datos.html_url}</a>
            </p>
            </div>
        </div>
    );
};

export default ItemDetail;
