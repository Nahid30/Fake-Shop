import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {

    const { id, tittle, price, description, category, image, rating } = product;

    const navigate = useNavigate();


    return (
        <div>

            <Card >

                <Card.Img variant="top" height={200} src={image} />
                <Card.Body>
                    <Card.Title>{tittle}</Card.Title>
                    <Card.Text> {category} </Card.Text>
                    <Card.Text>Price: ${price} </Card.Text>
                    <Card.Text> {rating.rate} </Card.Text>
                    <Card.Text> {rating.count} </Card.Text>
                    <Card.Text> {description.slice(0, 80)}... </Card.Text>
                </Card.Body>

                <Card.Footer>
                    <Button onClick={() => navigate(`/product/${id}`)} variant="primary">See Details</Button>
                </Card.Footer>

            </Card>


        </div>
    );
};

export default Product;