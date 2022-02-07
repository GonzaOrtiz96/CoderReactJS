import React, {useState, useEffect} from 'react';
import '../../Styles/bootstrap.min.css';

//component
import Item from '../Item/item';


const ItemDetail = ({datos}) => {
    return(
        <div className='card col'>
            {datos.map((info) => {
                return(
                    <div key={info.id}>
                        <Item data={info}/>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemDetail;
