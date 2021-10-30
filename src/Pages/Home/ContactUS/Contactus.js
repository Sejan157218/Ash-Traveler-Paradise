import React from 'react';
import './Contactus.css';

const Contactus = () => {

    return (

        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116879.17686672432!2d90.3382337642108!3d23.730460960115277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1635634994015!5m2!1sen!2sbd" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />



            <div>
                <div id="fh5co-main">
                    <div class="fh5co-narrow-content animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">

                        <div class="row">
                            <div class="col-md-4 col-md-offset-1">
                                <h1>Get In Touch</h1>
                            </div>

                        </div>
                        <br /><br />
                        <form action="">
                            <div class="row">
                                <div class="col-md-10 col-md-offset-1">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Name" />
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Email" />
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                                            </div>
                                            <div class="form-group">
                                                <input type="submit" class="btn btn-primary btn-md" value="Send Message" />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Contactus;