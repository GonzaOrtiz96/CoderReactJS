import React, {useState, useEffect} from 'react';
import Item from '../Item/item';
import '../bootstrap.min.css';

const ItemList = ({datos}) =>{
    const [guardado] = useState({datos});
    return(
        <div className='card col'>
            {datos.map((info) =>{
                return (
                    <div key={info.id}>
                        <Item data={info}/>
                    </div>
                )
            })}
        </div>
    );
};

export default ItemList;