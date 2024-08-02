import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../features/ProductSlice.js';
import CardComponent from '../components/CardComponent.jsx';

const ProductDetail = () => {
    const products = useSelector((state) => state.product.data);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    return (
        <>
            <Col md={7}>
                <h4>Product Detail</h4>
                {error ? error : ""}
                <hr />
                <Row>
                    {products ? products.map((item) => (
                        <CardComponent key={item.id} product={item} />
                    )) : loading ? (
                        <p>Loading...</p>
                    ) : (
                        <p>Data not found</p>
                    )}
                </Row>
            </Col>
        </>
    );
};

export default ProductDetail;
