import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contactus.css';

const Contactus = () => {

    return (

        <div>
            <div className="contact-container justify-content-center d-flex align-items-center mb-5">
            </div>
            <div className="container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116879.17686672432!2d90.3382337642108!3d23.730460960115277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1635634994015!5m2!1sen!2sbd"  height={450} style={{ border: 0,width:"100%" }} allowFullScreen loading="lazy" />
            </div>

            <Container>
                <section id="contact">

                    <div className="text-center my-5"><h1 className="get-in-touch">Get in Touch</h1></div>
                    <div className="contact-wrapper">
                        <Row>
                            <Col><form id="contact-form" className="form-horizontal" role="form">

                                <div className="form-group mb-2">
                                   
                                        <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required />
                                    
                                </div>

                                <div className="form-group  mb-2">
                                 
                                        <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
                                   
                                </div>

                                <textarea className="form-control  mb-2" rows="10" placeholder="MESSAGE" name="message" required></textarea>

                                <button className="send-button" id="submit" type="submit" value="SEND">
                                    <div className="alt-send-button">
                                        <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                                    </div>

                                </button>

                            </form></Col>
                            <Col><div className="direct-contact-container">

                                <ul className="contact-list">
                                    <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Mohammadpur,Dhaka</span></i></li>

                                    <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone">(111) 111-111</span></i></li>

                                    <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail">info@gmail.com</span></i></li>

                                </ul>
                                <hr />
                                <ul className="social-media-list">
                                    <li><i class="fab fa-facebook"></i>
                                    </li>
                                    <li><i class="fab fa-twitter"></i>
                                    </li>
                                    <li><i class="fab fa-linkedin"></i>
                                    </li>
                                  
                                </ul>
                                <hr />

                            </div></Col>
                        </Row>
                    </div>

                </section>
            </Container>








        </div>
    );

};

export default Contactus;