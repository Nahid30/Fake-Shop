import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div  className='bg-dark text-muted text-center mt-5 mb-0 pb-0 '>
            <p className='py-5 mb-0 '>Copyrights &copy; {year} | All Rights Reserved by FakeShop.com  </p>
        </div>
    );
};

export default Footer;