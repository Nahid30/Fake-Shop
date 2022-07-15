import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Loading from '../Loading/Loading';

const Products = () => {


    const [allProducts, setAllProducts] = useState([]);
    let [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data)
                setLoading(false);

            })
    }, [])


    return (
        <div>

            <h1 className='text-center my-5'>Products</h1>

            {
                loading && <div style={{height:"60vh"}} className='d-flex justify-content-center align-items-center'>
                    <Loading></Loading>
                </div>
            }

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