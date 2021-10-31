import React from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container mt-5" >
            <Container className="py-5">
                <Row>
                    <Col sm={4} xs={6}><h1>Ash Traveler Paradise</h1>
                        <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip</p>

                    </Col>
                    <Col sm={3} xs={6}>
                        <Nav className="flex-column content-footer">
                            <Nav className="flex-column content-footer">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/gallery" >Gallery</Nav.Link>
                                <Nav.Link as={Link} to="/blog" >Blog</Nav.Link>
                                <Nav.Link as={Link} to="/contact" >Contacts</Nav.Link>

                            </Nav>

                        </Nav>

                    </Col>
                    <Col sm={5} xs={12}>
                        <h1>Photos</h1>
                        <Row xs={2} md={6} className="g-2">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="https://i.ibb.co/g4S0n95/footer.jpg" />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
                <hr style={{ color: "white" }} />
                <Row className="mt-5 ms-3">
                    <Col sm={7} xs={12} className="d-flex align-items-center">
                        <p className="mb-0">Copyright © 2021 𝓐𝓢𝓗 𝓣𝓻𝓪𝓿𝓮𝓵𝓮𝓻 𝓟𝓪𝓻𝓪𝓭𝓲𝓼𝓮 by Sejan Mahmud</p>
                    </Col>
                    <Col sm={5} xs={12}>
                        <Nav className="content-footer">
                            <Nav.Link className="me-2">Privacy Policy.</Nav.Link>
                            <Nav.Link className="me-2">Terms of Use </Nav.Link>
                            <Nav.Link className="me-2">Pricing</Nav.Link>
                        </Nav>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;