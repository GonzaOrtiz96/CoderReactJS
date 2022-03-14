import React, {useState, useEffect} from 'react';
import '../../Styles/bootstrap.min.css';

//components
import ItemList from '../ItemList/ItemList';
import Spinner from '../spinners/spinner';

//Firebase -- Firestore
import {db} from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';

const ListContainer = () => {

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
        <div className='container' style={{marginBottom:25}}>
            <div className='row'>
                {cargando ? <Spinner /> : <ItemList datos={productos}/>}
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
        
        
    );
};

export default ListContainer;