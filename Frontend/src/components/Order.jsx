import React, { useEffect } from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../features/CartSlice.js";

const Order = () => {
    const carts = useSelector((state) => state.cart.data);
    const loading = useSelector((state) => state.cart.loading);
    const error = useSelector((state) => state.cart.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return (
        <>
            <Col md={3}>
                <h4>Order</h4>
                {error ? error : ""}
                <hr />
                <ListGroup>
                    {carts ? carts.map((item) => (
                        <ListGroup.Item
                            key={item.id}
                            variant="flush"
                            style={{ cursor: "pointer" }}
                        >
                            <div className="fw-bold">{item.name}</div>
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="me-auto">
                                    <small>
                                        RP {parseInt(item.price).toLocaleString("id-ID")} x {""}
                                        {item.qty}
                                    </small>
                                    <p>
                                        <small>
                                            Total: RP {parseInt(item.price * item.qty).toLocaleString("id-ID")}
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </ListGroup.Item>
                    )) : loading ? (
                        <p>Loading...</p>
                    ) : (
                        <p>Data not found</p>
                    )}
                </ListGroup>
            </Col>
        </>
    );
};

export default Order;
