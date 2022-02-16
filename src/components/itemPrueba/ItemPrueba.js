import React from 'react'

const ItemPrueba = ({data}) => {
    return (
        <div className='cardBody'>
            <h2 className='cardTitle'>{data.name}</h2>
            <p className='cardText'>Precio: ${data.price}</p>
        </div>
    )
}

export default ItemPrueba;