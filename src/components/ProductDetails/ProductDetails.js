import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';



const ProductDetails = () => {


    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    const [item, setItem] = useState({});
    useEffect(() => {
        setLoading(true)
        const url = `https://fakestoreapi.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setLoading(false)
            })
    }, [])

    return (
        <div  className='my-4' >
            {
                loading ? <div style={{ height: "60vh" }} className='d-flex justify-content-center align-items-center'>
                    <Loading></Loading>
                </div> :

                    <div className='container'>
                        

                        <Row className='gy-4' md={2} xs={1}>
                            <Col className='d-flex justify-content-center align-items-center'> <div  className='w-50 mx-auto '><img className='img-fluid' src={item?.image} alt="" /></div> </Col>
                            <Col className='align-items-center'>
                                <div>
                                    <h2>{item?.title}</h2>
                                    <p>Category: {item?.category}</p>
                                    <p>Price: ${item?.price}</p>
                                    <p>Rating: {item?.rating?.rate}</p>
                                    <p>Count: {item?.rating?.count}</p>
                                    <p>Description: {item?.description}</p>
                                </div>

                            </Col>
                        </Row>

                    </div>
            }


        </div>
    );
};

export default ProductDetails;

