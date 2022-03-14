import React, {useState, useEffect} from 'react';
import '../../Styles/bootstrap.min.css';

//components
import ItemList from '../ItemList/ItemList';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Firebase -- Firestore
import {db} from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";


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
                <div className='col-sm-4 row-sm-2 '>
                    <Link to={'/category/top'}>
                        <button className='btn btn-outline-info'>Filtrar por Tops</button>
                    </Link>
                    <Link to={'/category/abrigo'}>
                        <button className='btn btn-outline-info'>Filtrar por Abrigos</button>
                    </Link>
                    <Link to={'/category/conjunto'}>
                        <button className='btn btn-outline-info'>Filtrar por Conjuntos</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Categoria;