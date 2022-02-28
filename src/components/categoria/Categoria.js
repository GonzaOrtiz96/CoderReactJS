import React, {useState, useEffect} from 'react';
import '../../Styles/bootstrap.min.css';

//components
import ItemList from '../ItemList/ItemList';

//Firebase -- Firestore
import {db} from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";

const Categoria = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProductos = async  () => {
            const q = query(collection(db, 'items'), where('tipo', '==', 'Top'));
            const querySnapshot = await getDocs(q);
            const cada = [];
            querySnapshot.forEach((uno) => {
                cada.push({...uno.data(), id: uno.id});
            });
            setProductos(cada);
        };
        getProductos();
    }, []);
    return (
        <div className='container'>
            <div className='row'>
                <ItemList datos={productos} />
            </div>
        </div>
    )
}

export default Categoria;