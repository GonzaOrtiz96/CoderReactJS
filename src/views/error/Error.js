import React from 'react';

import IMG from '../../media/404.jpg';

const Error = () => {
    return(
        <div>
            <img src={IMG} alt='404 NOT FOUND^2' style={{width:'100%'}}/>
        </div>
    );
};

export default Error;
