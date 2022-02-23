import React, {useState, useEffect} from 'react';
import '../../Styles/bootstrap.min.css';
import axios from 'axios';

//components
import ItemList from '../ItemList/ItemList';
import Spinner from '../spinners/spinner';

//Firebase -- Firestore
import {db} from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";

const ListContainer = () => {
    /* const [users, setUsers] = useState([]);

    useEffect(() => {
        axios('https://api.github.com/users')
        .then(respuesta => setUsers(respuesta.data));
    }, []); */

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const getProductos = async  () => {
            const q = query(collection(db, 'items'));
            const querySnapshot = await getDocs(q);
            const cada = [];
            querySnapshot.forEach((uno) => {
                cada.push({...uno.data(), id: uno.id});
            });
            setProductos(cada);
            setTimeout(() => {
                setCargando(false);
            }, 250)
        };
        getProductos();
    }, []);
    return(
        <div className='container'>
            <div className='row'>
                {cargando ? <Spinner /> : <ItemList datos={productos}/>}
                
            </div>
        </div>    
    );
};

export default ListContainer;