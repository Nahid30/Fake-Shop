import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Brands from '../Brands/Brands';



const Home = () => {

    const [allProducts, setAllProducts] = useState([]);
    let [loading, setLoading] = useState(false);

    const navigate = useNavigate();

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

            <Banner></Banner>

            <div>
                <h1 className='text-center my-5'>Products</h1>

            {
                loading && <div style={{height:"60vh"}} className='d-flex justify-content-center align-items-center'>
                    <Loading></Loading>
                </div>
            }

                <Row className='gy-5 container mx-auto' md={2} lg={3} xs={1}>
                    {
                        allProducts.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>

                <button className='btn btn-warning d-block mx-auto mt-4' onClick={() => navigate('/products')}>See All Products</button>

            </div>

            <Brands></Brands>

        </div>
    );
};

export default Home;



