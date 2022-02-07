import React, {useState, useEffect} from 'react';
import './bootstrap.min.css';
import ItemList from './ItemList/ItemList';

const ListContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((json) => setUsers(json));
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