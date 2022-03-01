import React, {useState, useEffect} from 'react';
import '../../Styles/bootstrap.min.css';

//components
import ItemList from '../ItemList/ItemList';

//Firebase -- Firestore
import {db} from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from 'react-router-dom';

const Categoria = () => {
    const [productos, setProductos] = useState([]);

    const {tipo} = useParams();

    useEffect(() => {
        const getProductos = async  () => {
            const q = query(collection(db, 'items'), where('tipo', '==', tipo));
            const querySnapshot = await getDocs(q);
            const cada = [];
            querySnapshot.forEach((uno) => {
                cada.push({...uno.data(), id: uno.id});
            });
            setProductos(cada);
        };
        getProductos();
    }, [tipo]);
    return (
        <div className='container'>
            <div className='row'>
                <ItemList datos={productos} />
            </div>
        </div>
    )
}

export default Categoria;