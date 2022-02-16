import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../../Styles/bootstrap.min.css';
import axios from 'axios';

//components
import ItemDetail from '../itemDetail/itemDetail';
import Spinner from '../spinners/spinner';

const ItemDetailContainer = () => {
    const [users, setUsers] = useState([]);
    const [cargando, setCargando] = useState(true);

    let id = useParams();

    useEffect(() => {
        axios('https://api.github.com/users')
        .then(respuesta => setUsers(respuesta.data[id.id-1]));
        setTimeout(() =>{
            setCargando(false);
        },200);
    }, []);
    return(
        <div>
            {cargando ? <Spinner /> : <ItemDetail datos={users} />}
        </div>
    );
};

export default ItemDetailContainer;
