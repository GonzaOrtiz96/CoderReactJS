import React, {useState, useEffect} from 'react';
import '../../Styles/bootstrap.min.css';
import axios from 'axios';

//components
import ItemList from '../ItemList/ItemList';

const ListContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios('https://api.github.com/users')
        .then(respuesta => setUsers(respuesta.data));
    }, []);
    return(
        <div className='container'>
            <div className='row'>
                <ItemList datos={users}/>
            </div>
        </div>    
    );
};

export default ListContainer;