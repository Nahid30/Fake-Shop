import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({ product }) => {

    const { tittle, price, description, category, image, rating } = product;

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
                    <Button variant="primary">See Details</Button>
                </Card.Footer>
            </Card>


        </div>
    );
};

export default Product;