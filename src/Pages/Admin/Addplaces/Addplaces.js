import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./Addplaces.css"

const Addplaces = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://spooky-asylum-59819.herokuapp.com/places', data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('successfully added');
                    reset();
                }
            })
    };
    return (
        <div className="text-center">
            <div className="add-container">

            </div>

            <div className="form-container container">

                <h1 className="my-3">Add Offers</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name")} placeholder="Place Name" />
                    <br />
                    <input type="number" {...register("price")} placeholder="Travel Cost" />
                    <br />
                    <input type="text" {...register("rating")} placeholder="Rating" />
                    <br />
                    <input type="number" {...register("days")} placeholder="Days" />
                    <br />
                    <input type="text" {...register("desc")} placeholder="Place description" />
                    <br />
                    <input type="text" {...register("img")} placeholder="image URL" />
                    <br />
                    <input className="banner-btn" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Addplaces;