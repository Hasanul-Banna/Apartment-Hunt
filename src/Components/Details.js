import React from 'react';
import { useParams } from 'react-router-dom';
import { apartmentData } from '../fakeData';
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

            <section className="banner">
                <div className="layer">
                    <h1>{CurrentApartment.name}</h1>
                </div>
            </section>
            <div className="container ">
                <div className="row">
                    <div className="col-md-7">
                        <img src={CurrentApartment.photo} className="w-100 m-2" alt="" />
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

                            <textarea className="form-control" rows="4" name="instruction" placeholder="Message..." ref={register({ required: false })}></textarea>
                            {errors.instruction && <small className="text-danger">This field is required</small>}<br />

                            <input className="btn btn-info w-100" type="submit" value="Request booking" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h2>{CurrentApartment.name}</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="price">BDT {CurrentApartment.price}/- per day</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium praesentium id minus dolorem atque tenetur quasi provident sed sequi deleniti qui, culpa vero dolores cumque facilis? Ut, dolores nostrum. Lorem ipsum dolor sit  minima illum quam natus perferendis distinctio explicabo vel est omnis nostrum excepturi aliquam laborum porro aliquid tempora odit assumenda aspernatur impedit dignissimos rem. Possimus a excepturi quaerat?</p>

                    </div>
                    <div className="col-md-3">
                        <h3 className="theme-text">Deatils</h3>
                        <span>Room-Type : {CurrentApartment.RoomType}</span> <br />
                        <span>Bed :  {CurrentApartment.bed}</span> <br />
                        <span>Bathroom :  {CurrentApartment.bath}</span> <br />
                        <span>Flat Size :  {CurrentApartment.flatSize} Sq-ft.</span> <br />
                        <span> Address :
                            {CurrentApartment.address.area} ,
                            #{CurrentApartment.address.street},
                            {CurrentApartment.address.city}
                        </span>
                    </div>
                    <div className="col-md-3">
                        <h3 className="theme-text">Facilities :</h3>
                        <p>
                            TV : {CurrentApartment.facilities.TV} <br />
                            Wifi : {CurrentApartment.facilities.Wifi} <br />
                            Breakfast : {CurrentApartment.facilities.Breakfast} <br />
                            Swimming-Pool : {CurrentApartment.facilities.SwimmingPool} <br />
                            Car-Parking : {CurrentApartment.facilities.Parking}
                        </p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Details;