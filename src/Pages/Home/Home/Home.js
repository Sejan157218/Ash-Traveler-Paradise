import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [places, setPlaces] = useState([]);
    // fetch data for places
    useEffect(() => {
        fetch('http://localhost:9000/places')
            .then(res => res.json())
            .then(data => {
                setPlaces(data);
                setLoading(false)
            })

    }, [])

    if (loading) {
        return <div>
            <Spinner animation="border" variant="success" />
        </div>
    }
    return (
        <div>
            {places.map(place =>
                <ul>
                    <img style={{ width: '300px' }} src={place?.img} alt="" />
                    <li>{place?.name}</li>
                    <li>{place?.desc}</li>
                    <Link to={`/places/${place?._id}`}><button>Order</button></Link>
                </ul>
            )}
        </div>
    );
};

export default Home;