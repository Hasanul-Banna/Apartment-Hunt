import React from 'react';
import { useParams } from 'react-router-dom';
import { apartmentData } from '../fakeData';
import Navibar from './Navbar';
import { useForm } from "react-hook-form";


const Details = () => {
    const { id } = useParams();
    const CurrentApartment = apartmentData.find(x => x.id === id);
    // console.log(CurrentApartment);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <>
            <Navibar />
            <section className="banner">
                <div className="layer">
                    <h1>{CurrentApartment.name}</h1>
                </div>
            </section>
            <div className="container ">
                <div className="row">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-12"><img src={CurrentApartment.photo_1} className="w-100 m-2" alt="" /></div>
                            <div className="col-3"><img src={CurrentApartment.photo_2} className="w-100 m-2" alt="" /></div>
                            <div className="col-3"><img src={CurrentApartment.photo_3} className="w-100 m-2" alt="" /></div>
                            <div className="col-3"><img src={CurrentApartment.photo_4} className="w-100 m-2" alt="" /></div>
                            <div className="col-3"><img src={CurrentApartment.photo_5} className="w-100 m-2" alt="" /></div>
                        </div>
                    </div>
                    <div className="col-md-5 ">

                        <form className="bg-light p-3" onSubmit={handleSubmit(onSubmit)}>
                            <br />
                            <input type="text" className="form-control" name="name" placeholder="Your name" ref={register({ required: true })} />
                            {errors.name && <small className="text-danger">This field is required</small>} <br />

                            <input type="text" className="form-control" name="email" placeholder="Email address" ref={register({ required: true })} />
                            {errors.email && <small className="text-danger">This field is required</small>} <br />

                            <input type="text" className="form-control" name="mobile" placeholder="Phone number" ref={register({ required: true })} />
                            {errors.mobile && <small className="text-danger">This field is required</small>}<br />

                            <textarea className="form-control" rows="6" name="instruction" placeholder="Message..." ref={register({ required: false })}></textarea>
                            {errors.instruction && <small className="text-danger">This field is required</small>}<br /> <br />

                            <input className="btn btn-info w-100" type="submit" value="Request booking" />
                        </form>

                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h2>{CurrentApartment.name}</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="price">BDT {CurrentApartment.price}/-</h3>
                        <p>{CurrentApartment.details}</p>
                        <h3 className="theme-text">Price Deatils</h3>
                        <span>Rent Per Month : BDT {CurrentApartment.pricing.rentPerMonth}/-</span> <br />
                        <span>Service Charge : BDT {CurrentApartment.pricing.ServiceCharge}/-</span> <br />
                        <span>Security Deposit : {CurrentApartment.pricing.securityDeposit} months rent</span> <br />
                        <span>Flat Release Policy : {CurrentApartment.pricing.flatReleasePolicy} months earlier notice required</span>
                    </div>
                    <div className="col-md-6">
                        <h3 className="theme-text">Property Deatils</h3>
                        <p>
                            {CurrentApartment.propertyDetails.address.road} , 
                            {CurrentApartment.propertyDetails.address.houseNo} , 
                            {CurrentApartment.propertyDetails.address.street} , 
                            {CurrentApartment.propertyDetails.address.city}  
                        </p>
                        <p>
                            {CurrentApartment.propertyDetails.flatSize} Sq-ft.
                        </p>
                        <p>
                            {CurrentApartment.propertyDetails.facilities}
                        </p>
                        <p>
                            {CurrentApartment.propertyDetails.additionalFacilities.number1} , 
                            {CurrentApartment.propertyDetails.additionalFacilities.number2} , 
                            {CurrentApartment.propertyDetails.additionalFacilities.number3} , 
                            {CurrentApartment.propertyDetails.additionalFacilities.number4} , 
                            {CurrentApartment.propertyDetails.additionalFacilities.number5}  
                        </p>


, 



                    </div>

                </div>
            </div>
        </>

    );
};

export default Details;