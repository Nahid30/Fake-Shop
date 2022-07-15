import React from 'react';
import img from '../../images/4042.jpg';

const NotFound = () => {
    return (
        <div className='container'>
            <h3 className='text-danger text-center my-5'>Page Not Found 404</h3>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;