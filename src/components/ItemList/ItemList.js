import '../../Styles/bootstrap.min.css';

//components
import { Link } from 'react-router-dom';
import Item from '../Item/item';
import React from 'react';



const ItemList = ({datos}) =>{
    return(
        <div className='col-sm-8 row'>
            {datos.map((info) =>{
                return (
                    <div className='col-sm-4' key={info.id}>
                        <Item data={info} />
                        <Link to={`/detail/${info.id}`}>
                            <button className='btn btn-outline-primary'>Ir a detalle</button>
                        </Link>
                    </div>
                    
                )
            })}
        </div>
    );
};

export default ItemList;