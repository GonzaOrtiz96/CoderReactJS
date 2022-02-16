import '../../Styles/bootstrap.min.css';

//components
import { Link } from 'react-router-dom';
import Item from '../Item/item';
import ItemPrueba from '../itemPrueba/ItemPrueba';
import React, { useContext } from 'react';

//contex
import { ItemContext } from '../itemContext/ItemContext';

const ItemList = ({datos}) =>{
    const [items, setItems] = useContext(ItemContext);
    return(
        <div className='card col'>
            {datos.map((info) =>{
                return (
                    <Link to={`/detail/${info.id}`}>
                        <Item data={info} key={info.id}/>
                    </Link>
                )
            })}
            {/* {items.map((item) => {
                return(
                    <ItemPrueba data={item} key={item.id}/>
                )
            })} */}
        </div>
    );
};

export default ItemList;