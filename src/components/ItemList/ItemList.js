import '../../Styles/bootstrap.min.css';

//components
import { Link } from 'react-router-dom';
import Item from '../Item/item';
import React from 'react';



const ItemList = ({datos}) =>{
    return(
        <div className='card col'>
            {datos.map((info) =>{
                return (
                    <Link to={`/detail/${info.id}`}>
                        <div key={info.id}>
                            <Item data={info}/>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
};

export default ItemList;