import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./OurOffer.css";

const OurOffer = ({ place }) => {
  return (
    <div>
      <Col>
        <figure class="image-block">
          <h1>{place?.name}</h1>
          <img src={place?.img} alt="" />
          <figcaption>
            <h3 className="d-flex justify-content-between" >
              <span><i class="fas fa-dollar-sign"></i>{place?.price}</span>
              <span><i class="far fa-clock"></i> {place?.days} Days</span>
            </h3>
            <p>{place?.desc.slice(0, 250)}</p>
            <Link to={`/places/${place?._id}`}><button>
              <i class="fas fa-shopping-cart me-2"></i> Book Now
            </button></Link>

          </figcaption>
        </figure>

      </Col>

    </div>
  );
};

export default OurOffer;