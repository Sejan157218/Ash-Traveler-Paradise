import React from 'react';
import { cards, Col, Row } from 'react-bootstrap';
import "./OurDestination.css"

const OurDestination = () => {
    return (

        <div class="container">
            <div class="card">
                <div style={{ background: `url('https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg') no-repeat center center`, }} class="box">
                    <div class="content">
                      
                        <h3>Card One</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default OurDestination;