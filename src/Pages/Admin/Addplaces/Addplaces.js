import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const Addplaces = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:9000/places', data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('successfully added');
                    reset();
                }
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} placeholder="place Name" />
                <br />
                <input type="number" {...register("price")} placeholder="Travel Cost" />
                <br />
                <input type="text" {...register("rating")} placeholder="rating" />
                <br />
                <input type="number" {...register("days")} placeholder="Days" />
                <br />
                <input type="text" {...register("desc")} placeholder="place description" />
                <br />
                <input type="text" {...register("img")} placeholder="image URL" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addplaces;