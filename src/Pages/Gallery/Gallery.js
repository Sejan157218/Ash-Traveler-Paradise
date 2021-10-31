import React from 'react';
import { Row } from 'react-bootstrap';
import "./Gallery.css"

const Gallery = () => {
    return (
        <div >
            <div className="gallery-container d-flex justify-content-center align-items-center">
                <h1 className="">𝒢𝒶𝓁𝓁𝑒𝓇𝓎</h1>
            </div>
            <div className="container">


                <div class="gallery">
              
                    <Row xs={1} md={4}>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>

                        </Row>
                 
                </div>
            </div>
        </div>
    );
};

export default Gallery;