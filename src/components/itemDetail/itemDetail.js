import React, {useState} from 'react';
import '../../Styles/bootstrap.min.css';

//components
import ItemCount from '../ItemCount/itemCount';



const ItemDetail = ({datos}) => {
    const [carrito, setCarrito] = useState([]);
    const onAdd = () => {
        setCarrito(datos.id);
    };
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
            <ItemCount onadd={onAdd}/>
            </div>
        </div>
    );
};

export default ItemDetail;
