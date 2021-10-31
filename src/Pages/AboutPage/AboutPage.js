import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./AboutPage.css"

const AboutPage = () => {
    return (

        <div>
            <div className="about-container d-flex justify-content-center align-items-center">
                <h1>About US</h1>
            </div>
            <div className="container my-5">
                <Row xs={1} md={2}>
                    <Col><img className="w-100" style={{height:"30rem"}} src="https://i.ibb.co/RgjFYRw/vinicius-henrique-photography-5s-Ckm9-PHF04-unsplash-1.jpg" alt="" /></Col>
                    <Col>
                        <h1 className="our-story">Our Story</h1>
                        <p>Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutPage;