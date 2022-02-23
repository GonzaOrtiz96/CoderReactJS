import '../../Styles/bootstrap.min.css';
import React from 'react';

const Item = ({ data }) => {
    return(
        <div className='cardBody' style={{margin:20}}>
            <img className='imgFluid' src={data.img} style={{width:150}} alt='imagen de producto'/>
            <h2 className='cardTitle'>
                {data.nombre}
            </h2>
            <p className='cardText'>
                stock: {data.stock}
            </p>
        </div>
    );
};

export default Item;