import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { Card, Col, Container, Row } from 'react-bootstrap';

import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth()
    const [place, setPlace] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://spooky-asylum-59819.herokuapp.com/places/${id}`)
            .then(res => res.json())
            .then(data => setPlace(data))
    }, [id])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user?.email;
        axios.post(`https://spooky-asylum-59819.herokuapp.com/order/${id}`, data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('successfully ordered');
                    reset();
                }
            })
    };
    return (
        <div className="container">
            <div className="text-center my-5">
                <h1>Book Now</h1>
            </div>
            <Row xs={1} md={2}>
                <Col>  <Card border="primary" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={place?.img} />
                    <Card.Body>

                        <Card.Text>
                            {place?.desc}
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
                <Col className="order-form"><form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={place?.name} readOnly />
                    <br />
                    <input defaultValue={place?.price} readOnly />
                    <br />
                    <input defaultValue={place?.days} readOnly />
                    <br />
                    <input type="text" {...register("user_name")} placeholder="Full Name" />
                    <br />
                    <input type="text" {...register("Gender")} placeholder="Gender" />
                    <br />
                    <input type="number" {...register("age")} placeholder="Age" />
                    <br />

                    <input type="number" {...register("phone")} placeholder="Phone Number" />
                    <br />
                    <input type="text" {...register("address")} placeholder="Address" />
                    <br />
                    <input className="banner-btn" type="submit" />
                </form></Col>
            </Row>


        </div>
    );
};

export default PlaceOrder;