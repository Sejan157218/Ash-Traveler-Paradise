import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutUS from '../AboutUS/AboutUS';
import Banner from '../Banner/Banner';
import OurDestination from '../OurDestination/OurDestination';
import OurOffer from '../OurOffer/OurOffer';

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
            <Banner></Banner>
            <Container>

                <h1>Our destitation</h1>
                <Row xs={1} md={3} className="g-3">
                    {Array.from({ length: 6 }).map((_, idx) => <OurDestination></OurDestination>)}
                </Row>

            </Container>

            <Container>


                <h1>Our Offer</h1>
                <Row xs={1} md={3} className="g-3">
                    {Array.from({ length: 6 }).map((_, idx) => <OurOffer></OurOffer>)}
                </Row>
            </Container>
            <AboutUS></AboutUS>


            <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
            />

            <div>
                <h1>resend tips</h1>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
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