import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const CardComponent = ({ product, setCart }) => {
    return (
        <Card className="product-card">
            <Card.Img variant="top" src={`/img/${product.image}`} alt={product.name} className="product-image"/>
            <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name} ({product.code})</Card.Title>
                <Card.Text>Rp {product.price.toLocaleString()}</Card.Text>
                <Button variant="primary" onClick={() => setCart(product)} className="mt-auto">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
};

CardComponent.propTypes = {
    product: PropTypes.object.isRequired,
    setCart: PropTypes.func.isRequired,
};

export default CardComponent;
