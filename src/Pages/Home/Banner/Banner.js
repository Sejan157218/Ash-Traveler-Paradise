import React, { useEffect, useState } from 'react';
import Slider from 'react-animated-slider';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Banner.css';


const Banner = () => {
    const { logout, user } = useAuth();
    const object = [
        { img: "https://i.ibb.co/bBJwdDk/luca-bravo-O453-M2-Liufs-unsplash.jpg", key: "gdgfgsggfdfg", desc: "", name: "Australia" },
        { img: "https://i.ibb.co/t8jH9Kf/rodrigo-ramos-PAz-k-D7cq-C8-unsplash.jpg", key: "fgdfgdfg", desc: "", name: "Switzerland" },
        { img: "https://i.ibb.co/R96n262/s-migaj-Yui5vf-KHuzs-unsplash.jpg", key: "gdgfgdfgfgsdfg", desc: "", name: "Indonesia" },
    ]
    const [places, setPlaces] = useState([]);
    // fetch data for places
    useEffect(() => {
        fetch('https://spooky-asylum-59819.herokuapp.com/places')
            .then(res => res.json())
            .then(data => {
                setPlaces(data);
            })

    }, [])
    return (
        <div>
            <Slider autoplay={6000} className="slider">
                {object?.map((item) => (
                    <div
                        key={item?.index}
                        className="sliderContent"
                        style={{ background: `url('${item?.img}') no-repeat center center`, }}
                    >
                        <div className="inner">
                            <h1>{item?.name}</h1>
                            <p>{item?.description}</p>
                            <Link to="/contact"><button className="banner-btn">Contact US</button></Link>
                        </div>
                        <section>
                            <img src={user?.photoURL} alt={item?.user} />
                            <span>
                                Posted by <strong>{user?.displayName}</strong>
                            </span>
                        </section>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;