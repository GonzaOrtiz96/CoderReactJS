import React, {useState, useEffect} from 'react';
import '../../Styles/bootstrap.min.css';
import axios from 'axios';

//components
import ItemDetail from '../itemDetail/itemDetail';
import Spinner from '../spinners/spinner';

const ItemDetailContainer = () => {
    const [users, setUsers] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        axios('https://api.github.com/users')
        .then(respuesta => setUsers(respuesta.data));
        setTimeout(() =>{
            setCargando(false);
        }, 2000);
    }, []);
    
    return(
        <div>
            {cargando ? <Spinner /> : <ItemDetail datos={users}/>}
        </div>
    );
};

export default ItemDetailContainer;
