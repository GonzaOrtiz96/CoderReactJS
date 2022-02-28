import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../../Styles/bootstrap.min.css';

//components
import ItemDetail from '../itemDetail/itemDetail';
import Spinner from '../spinners/spinner';

//Firebase -- Firestore
import {db} from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(true);

    let itemId = useParams();

    useEffect(() => {
        const getProductos = async  () => {
            const q = query(collection(db, 'items'));
            const querySnapshot = await getDocs(q);
            const cada = [];
            querySnapshot.forEach((uno) => {
                cada.push({...uno.data(), id: uno.id});
            });
            cada.forEach((uno) => {
                if (uno.id == itemId.id) {
                    setProducto(uno);
                }
            });
            setTimeout(() =>{
                setCargando(false);
            },200);};
        getProductos();
    }, []);
    return(
        <div>
            {cargando ? <Spinner /> : <ItemDetail datos={producto} />}
        </div>
    );
};

export default ItemDetailContainer;
