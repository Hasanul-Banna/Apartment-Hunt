import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Apartments = ({ apartment }) => {
    // console.log(apartment);
    return (
        <div className="col-md-4 p-3 ">
            <img style={{height:'210px'}} className="w-100" src={`data:image/png;base64,${apartment.image.img}`}  alt="" />
            <div className="bg-white p-3">
                <h5 className="theme-text">{apartment.name}</h5>
                <small><FontAwesomeIcon icon={faMapMarkerAlt} /> {apartment.location}</small>
                <div className="d-flex justify-content-between">
                    <small><FontAwesomeIcon icon={faBed} /> {apartment.bed} bed</small>
                    <small><FontAwesomeIcon icon={faBath} /> {apartment.bath} bathroom</small>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <span className="price">BDT {apartment.price}/-</span>
                    <Link to={`/Apartment/${apartment.id}`}>
                        <Button className="btn" variant="info">View Details</Button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Apartments;