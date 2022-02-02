import React, {useState, useEffect} from 'react';
import Item from '../Item/item';
import '../bootstrap.min.css';

const ItemList = () =>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((json) => setUsers(json));
    }, []);
    return(
        <div className='card col'>
            {users.map((info) => {
                return (
                    <div key={info.id}>
                        <Item data={info}/>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;