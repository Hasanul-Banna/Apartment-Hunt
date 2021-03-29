import React, { useState } from 'react';
import Sidebar from './Sidebar';

const AddRent = () => {
    const [roomInfo, setRoomInfo] = useState({})
    const handleBlur = (e) => {
        const newInfo = { ...roomInfo }
        newInfo[e.target.name] = e.target.value;
        setRoomInfo(newInfo);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(roomInfo);

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="container-fluid">
                        <form onSubmit={handleSubmit} className="row mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="id">Room Id</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="id" id="id" placeholder="Room Id" />
                                    <label htmlFor="Rname">Room title</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="Rname" id="Rname" placeholder="Family Delux" />
                                    <label htmlFor="address">Address</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="address" id="address" placeholder="Mirpur 10 Dhaka" />
                                    <label htmlFor="bed">Bed</label>
                                    <input onBlur={handleBlur} type="number" className="form-control" name="bed" id="bed" placeholder="number of bed" />
                                    <label htmlFor="bath">Bath</label>
                                    <input onBlur={handleBlur} type="number" className="form-control" name="bath" id="bath" placeholder="bathroom" />
                                    <label htmlFor="price">Price</label>
                                    <input onBlur={handleBlur} type="number" className="form-control" name="price" id="price" placeholder="Price" />
                                    <label htmlFor="flatSize">Flat Size</label>
                                    <input onBlur={handleBlur} type="number" className="form-control" name="flatSize" id="flatSize" placeholder="Sq. ft" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Image">Room Image</label>
                                    <input type="file" className="form-control-file" id="Image" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="htmlForm-group">
                                    <label htmlFor="location">Location</label>
                                    <select onBlur={handleBlur} className="form-control" id="location" name="location">
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Sylhet">Sylhet</option>
                                        <option value="Chattagram">Chattagram</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="RoomType">Room Type</label>
                                    <select onBlur={handleBlur} className="form-control" id="RoomType" name="RoomType">
                                        <option value="Single">Single</option>
                                        <option value="Double">Double</option>
                                        <option value="Family">Family</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Television">Television</label>
                                    <select onBlur={handleBlur} className="form-control" id="Television" name="Television">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Wifi">Internet</label>
                                    <select onBlur={handleBlur} className="form-control" id="Wifi" name="Wifi">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Breakfast">Breakfast</label>
                                    <select onBlur={handleBlur} className="form-control" id="Breakfast" name="Breakfast">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="SwimmingPool">SwimmingPool</label>
                                    <select onBlur={handleBlur} className="form-control" id="SwimmingPool" name="SwimmingPool">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Parking">Parking</label>
                                    <select onBlur={handleBlur} className="form-control" id="Parking" name="Parking">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                            <input className="btn btn-info w-100" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRent;