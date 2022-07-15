import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';


const Products = () => {


    const [allProducts, setAllProducts] = useState([]);




    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])


    return (
        <div>

            <h1 className='text-center my-5'>Products</h1>

            <Row className='gy-5 container mx-auto' md={2} lg={3} xs={1}>
                {
                    allProducts.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }

            </Row>
           


        </div>
    );
};

export default Products;