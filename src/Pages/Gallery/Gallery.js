import React from 'react';
import { Row } from 'react-bootstrap';
import "./Gallery.css"

const Gallery = () => {
    return (
        <div >
            <div className="gallery-container d-flex justify-content-center align-items-center">
                <h1 className="">𝒢𝒶𝓁𝓁𝑒𝓇𝓎</h1>
            </div>
            <div className="container mt-5">
                <div class="gallery">         
                    <Row xs={1} md={4}>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://i.ibb.co/xMzCKLW/gallary4.jpg" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://i.ibb.co/K5PgMZ7/gallary3.jpg" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://i.ibb.co/XVkwM1x/gallary2.jpg" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://i.ibb.co/JxX8wnM/gallary8.jpg" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://i.ibb.co/V9Fdkvp/gallary1.jpg" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://i.ibb.co/CQg1DKz/gallary6.jpg" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://i.ibb.co/gtf6h35/Neighbourhood-s-food-truck.jpg" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://i.ibb.co/T2t39KJ/gallary12.jpg" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://i.ibb.co/XzktdM5/gallary10.jpg" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>
                        <div class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://i.ibb.co/mqD2XL1/gallary9.jpg" alt="Portrait by Jessica Felicio" class="gallery__image" />

                            </figure>
                        </div>

                        </Row>
                 
                </div>
            </div>
        </div>
    );
};

export default Gallery;