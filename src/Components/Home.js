import React from 'react';
import { Button } from 'react-bootstrap';
import { apartmentData } from '../fakeData';
import Apartments from './Apartments';
import service1 from '../images/icons/apartment 1.png';
import service2 from '../images/icons/affordable 1.png';
import service3 from '../images/icons/lessee 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <>
            <section className="banner">
                <div className="layer">
                    <h1>FIND YOUR HOTEL ROOM</h1>
                    <br />
                    <div >
                        <Button className="btn" variant="info" size="lg">Find Now</Button>
                    </div>
                </div>
            </section>
            {/* apartments */}
            <section className="">
                <div className="text-center mt-3 theme-text">
                    <span>Hotel Room Rent</span>
                    <h2>Discover The Latest Rent <br /> Available Today</h2>
                </div>
                <div className="container d-flex justify-content-around my-5">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Area</option>
                        <option value="1">Dhaka</option>
                        <option value="2">Sylhet</option>
                        <option value="3">Chattagram</option>
                    </select>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Room Type</option>
                        <option value="1">Single</option>
                        <option value="2">Double</option>
                        <option value="3">Family</option>
                    </select>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Price</option>
                        <option value="1">High to Low</option>
                        <option value="2">Low to High</option>
                    </select>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            apartmentData.map(apartment => <Apartments key={apartment.id} apartment={apartment}></Apartments>)
                        }
                    </div>
                </div>
            </section>
            {/* service */}
            <section className="my-5">
                <div className="text-center mb-3 theme-text">
                    <h2>Your Satisfaction <br /> Is Our First & Foremost Priority</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 p-3 text-center">
                            <img className="w-25" src={service1} alt="" />  <br /> <br />
                            <b>Wide Range of properties</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet elit. Est, enim.Rerum, optio!</p>
                        </div>
                        <div className="col-md-4 p-3 text-center">
                            <img className="w-25" src={service2} alt="" /> <br /> <br />
                            <b>Financing Made Easy</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet elit. Est, enim. Rerum, optio!</p>
                        </div>
                        <div className="col-md-4 p-3 text-center">
                            <img className="w-25" src={service3} alt="" /> <br /> <br />
                            <b>Trusted By Thousand</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet elit. Est, enim. Rerum, optio!</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container pt-5 pb-3">
                    <div className="row">
                        <div className="col-md-5">
                            <h5>Contact</h5>
                            <span><FontAwesomeIcon icon={faMapMarker} /> House-no 115/c ( 4th floor ) , Road-no #2 <br /> Mohakhali , Dhaka 1000.</span> <br />
                            <span><FontAwesomeIcon icon={faPhone} /> +880-1712-112255 </span> <br />
                            <span><FontAwesomeIcon icon={faEnvelope} /> Apartment.hunt@gmail.com </span> <br />
                        </div>
                        <div className="col-md-2">
                            <h5>Company</h5>
                            <ul>
                                <li>About</li>
                                <li>Site map</li>
                                <li>Terms </li>
                                <li>conditions</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li>FAQ</li>
                                <li>Help</li>
                                <li>Refund policy</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>About</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus dignissimos blanditiis.</p>
                            <div style={{ fontSize: "30px" }} className="d-flex justify-content-between mt-2">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                                <FontAwesomeIcon icon={faInstagramSquare} />
                                <FontAwesomeIcon icon={faLinkedin} />
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>

                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Home;