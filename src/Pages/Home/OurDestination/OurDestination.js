import React from 'react';
import { cards, Col, Row } from 'react-bootstrap';
import "./OurDestination.css"

const OurDestination = ({ destitation }) => {
    return (

        <div class="containers">
            <div class="card">
                <div style={{ background: `url('${destitation?.img}')`, }} class="box">
                    <div class="content">

                        <h3>{destitation?.name}</h3>
                        <p></p>
                        <a >{destitation?.placeCount} Places</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OurDestination;