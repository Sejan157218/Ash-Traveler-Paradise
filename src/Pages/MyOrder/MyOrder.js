import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const MyOrder = () => {
    const { user } = useAuth();
    const [myorder, setMyOrder] = useState([])
    const [DeleteItem, setDeleteItem] = useState('')
    const email = user?.email;
    useEffect(() => {
        fetch(`https://spooky-asylum-59819.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [DeleteItem])


    const handlerToDelete = id => {
        const proceed = window.confirm('Are You sure to delete');
        if (proceed) {
            axios.delete(`https://spooky-asylum-59819.herokuapp.com/orders/${email}/${id}`)
                .then(function (response) {
                    if (response.data.deletedCount) {
                        alert('deleted successfully')
                        setDeleteItem(response.data.deletedCount);
                    }
                })
        }
    }
    return (
        <div className="container">
            <div className="my-5 text-center">
                <h1>My Booking</h1>
            </div>
            <Row xs={1} md={3} className="g-4">
                {myorder.map(order => (
                    <Col>
                        <figure class="image-block">
                            <h1>{order?.name}</h1>
                            <img src={order?.img} alt="" />
                            <figcaption>
                                <h3 className="d-flex justify-content-between" >
                                    <span><i class="fas fa-dollar-sign"></i>{order?.price}</span>
                                    <span><i class="far fa-clock"></i> {order?.days} Days</span>
                                </h3>
                                <p>{order?.desc.slice(0, 250)}</p>
                                <div className="d-flex justify-content-between">
                                <button>
                                    {order?.status}
                                </button>
                                <button onClick={() => handlerToDelete(order?._id)}>
                                    <i class="fas fa-trash"></i>  Delete Now
                                </button>
                                </div>

                            </figcaption>
                        </figure>

                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MyOrder;