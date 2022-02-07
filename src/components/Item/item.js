import '../../Styles/bootstrap.min.css';
import React from 'react';

const Item = ({ data }) => {
    return(
        <div className='cardBody'>
            <img className='imgFluid' src={data.avatar_url} style={{width:150}}/>
            <h2 className='cradTitle'>
                {data.login}
            </h2>
            <p className='cardText'>
                URL a su GitHub: <a href={data.html_url}>{data.html_url}</a>
            </p>
            <button className='btn btn-outline-primary'><a href='#' style={{textDecoration:'none'}}>A desarrollar</a></button>
        </div>
    );
};

export default Item;