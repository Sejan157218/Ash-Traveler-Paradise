import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import OurDestination from '../OurDestination/OurDestination';
import OurOffer from '../OurOffer/OurOffer';

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [places, setPlaces] = useState([]);
    // fetch data for places
    useEffect(() => {
        fetch('https://spooky-asylum-59819.herokuapp.com/places')
            .then(res => res.json())
            .then(data => {
                setPlaces(data);
                setLoading(false);
            })

    }, []);

    const destinationObject = [
        { name: "Jordan", img: "https://i.ibb.co/HFXs0Gy/Jordan.jpg", placeCount: 5, },
        { name: "Philippines", img: "https://i.ibb.co/sqJNvqD/Philippines.jpg", placeCount: 6, },
        { name: "Vietnam", img: "https://i.ibb.co/wsjQtnM/Vietnam.jpg", placeCount: 8, },
        { name: "Indonesia", img: "https://i.ibb.co/txpfHK8/Indonesia.jpg", placeCount: 3, },
        { name: "Turkey", img: "https://i.ibb.co/7JRShMZ/Turkey.jpg", placeCount: 4, },
        { name: "Austria", img: "https://i.ibb.co/ZJ0bLRg/Austria.jpg", placeCount: 2, },
        { name: "South Africa", img: "https://i.ibb.co/Scbttc2/South-Africa.jpg", placeCount: 6, },
        { name: "Greece", img: "https://i.ibb.co/ZS64nYG/Greece.jpg", placeCount: 6, },
        { name: "Spain", img: "https://i.ibb.co/tqHCLqR/Spain.jpg", placeCount: 8, }
    ]
    if (loading) {
        return <div className="text-center">
            <Spinner animation="border" variant="success" />
        </div>
    }
    return (
        <div>
            <Banner></Banner>
            <Container className="mt-5">
                <div className="text-center">
                    <h1 style={{ fontSize: '50px' }}>Popular Destination</h1>
                    <p className="text-center">Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                </div>
                <Row xs={1} md={3} className="g-3">
                    {destinationObject.map(destitation => <OurDestination destitation={destitation}></OurDestination>)}
                </Row>
            </Container>
            <Container className="mt-3">
              <div className="text-center">
              <h1>Popular Places</h1>
                <p className="text-center mb-3">With a world full of fascinating destinations, choosing the perfect vacation spot can present a challenge. That's why U.S. News used expert opinions, reader votes and current trends – and evaluated sights, cultures, scenic beauty, food scenes and more – to compile this list of the world's best places to visit. Use these recommendations to craft your travel bucket list, and cast your vote below to help us determine next year's list</p>
              </div>
                <Row xs={1} md={3} className="g-3">
                    {places.map(place => <OurOffer place={place}></OurOffer>)}
                </Row>
            </Container>
            <div className="my-5">
                <iframe width="100%" height="515" src="https://www.youtube.com/embed/CvrSoObs5jo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
            
                <div className="mx-5">
                    <h1  className="text-center mb-5">Recent Trips</h1>
                    <Row xs={1} md={3} className="g-4 h-100">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://i.ibb.co/fHbbqp5/tblog1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Be Flexible</Card.Title>
                                        <Card.Text>
                                        We always plan for delays and try not to get upset when things inevitably go wrong. Patience is extremely important when traveling!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://i.ibb.co/7xcDyt5/tblog2.jpg" />
                                    <Card.Body>
                                        <Card.Title>Make a List</Card.Title>
                                        <Card.Text>
                                        About a week or so before each trip, I make a mental list of items I don’t want to forget — which I WILL forget if I don’t write them down.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="https://i.ibb.co/GvsLkj4/tips3.jpg" />
                                    <Card.Body>
                                        <Card.Title>Ask The Locals</Card.Title>
                                        <Card.Text>
                                        We always ask the locals to point us to the best restaurants, awesome spots to watch the sunset, the best coffee shops, etc.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;