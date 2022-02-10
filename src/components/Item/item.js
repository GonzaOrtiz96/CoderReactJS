import '../../Styles/bootstrap.min.css';
import React from 'react';

//components
import ItemDetailContainer from '../itemDetailContainer/itemDetailContainer'

const Item = ({ data }) => {
    return(
        <div className='cardBody' style={{margin:20}}>
            <img className='imgFluid' src={data.avatar_url} style={{width:150}}/>
            <h2 className='cradTitle'>
                {data.login}
            </h2>
            <p className='cardText'>
                URL a su GitHub: <a href={data.html_url}>{data.html_url}</a>
            </p>
        </div>
    );
};

export default Item;