import React, { useEffect, useState } from 'react';
import Slider from 'react-animated-slider';
import './Banner.css';

const Banner = () => {
    const [places, setPlaces] = useState([]);
    // fetch data for places
    useEffect(() => {
        fetch('http://localhost:9000/places')
            .then(res => res.json())
            .then(data => {
                setPlaces(data);
            })

    }, [])
    return (
        <div>
            <Slider autoplay={6000} className="slider">
                {places.map((item, index) => (
                    <div
                        key={index}
                        className="sliderContent"
                        style={{ background: `url('${item.img}') no-repeat center center`, }}
                    >
                        <div className="inner">
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div>
                        <section>
                            <img src={item.userProfile} alt={item.user} />
                            <span>
                                Posted by <strong>{item.user}</strong>
                            </span>
                        </section>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;