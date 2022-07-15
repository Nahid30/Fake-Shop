import React from 'react';
import coming from '../../images/coming-soon.png';
import coderBoth from '../../images/coderBoth.gif';

const Blog = () => {
    return (
        <div >
            <div>
                <img src={coming} height={200} width={340} alt="" />
            </div>
            <div className='d-flex justify-content-center'>
                <img src={coderBoth} height={300} width={340} alt="" />
            </div>
        </div>
    );
};

export default Blog;