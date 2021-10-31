
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="img-notfound" src="https://i.ibb.co/BVfwys4/404-Error-Page-Not-Found.jpg" alt="" />
            <h1>
                <Link to="/">
                    <Button className="not-btn  mt-2">Back to Home</Button>
                </Link>
            </h1>

        </div>
    );
};

export default NotFound;