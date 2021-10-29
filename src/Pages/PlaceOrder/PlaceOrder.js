import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';

const PlaceOrder = () => {
    const [place, setPlace] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9000/places/${id}`)
            .then(res => res.json())
            .then(data => setPlace(data))
    }, [id])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = 'sejan7090@gmail.com';
        axios.post(`http://localhost:9000/order/${id}`, data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('successfully ordered');
                    reset();
                }
            })
    };
    return (
        <div>
            {place?.name}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("user_name")} placeholder="Full Name" />
                <br />
                <input type="number" {...register("age")} placeholder="Age" />
                <br />
                <input type="number" {...register("phone")} placeholder="Phone Number" />
                <br />
                <input type="text" {...register("address")} placeholder="Address" />
                <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default PlaceOrder;