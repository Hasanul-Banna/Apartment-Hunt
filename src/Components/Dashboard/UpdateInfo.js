import React from 'react';
import Sidebar from './Sidebar';
const UpdateInfo = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="container-fluid">
                        <form className="row mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="id">Room Id</label>
                                    <input type="text" className="form-control" name="id" id="id" placeholder="Room Id" />
                                    <label for="Rname">Room title</label>
                                    <input type="text" className="form-control" name="Rname" id="Rname" placeholder="Family Delux" />
                                    <label for="address">Address</label>
                                    <input type="text" className="form-control" name="address" id="address" placeholder="Mirpur 10 Dhaka" />
                                    <label for="bed">Bed</label>
                                    <input type="number" className="form-control" name="bed" id="bed" placeholder="number of bed" />
                                    <label for="bath">Bath</label>
                                    <input type="number" className="form-control" name="bath" id="bath" placeholder="bathroom" />
                                    <label for="price">Price</label>
                                    <input type="number" className="form-control" name="price" id="price" placeholder="Price" />
                                    <label for="flatSize">Flat Size</label>
                                    <input type="number" className="form-control" name="flatSize" id="flatSize" placeholder="Sq. ft" />
                                </div>
                                <div className="form-group">
                                    <label for="Image">Room Image</label>
                                    <input type="file" className="form-control-file" id="Image" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="location">Location</label>
                                    <select className="form-control" id="location" name="location">
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Sylhet">Sylhet</option>
                                        <option value="Chattagram">Chattagram</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="RoomType">Room Type</label>
                                    <select className="form-control" id="RoomType" name="RoomType">
                                        <option value="Single">Single</option>
                                        <option value="Double">Double</option>
                                        <option value="Family">Family</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="Television">Television</label>
                                    <select className="form-control" id="Television" name="Television">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="Wifi">Internet</label>
                                    <select className="form-control" id="Wifi" name="Wifi">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="Breakfast">Breakfast</label>
                                    <select className="form-control" id="Breakfast" name="Breakfast">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="SwimmingPool">SwimmingPool</label>
                                    <select className="form-control" id="SwimmingPool" name="SwimmingPool">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="Parking">Parking</label>
                                    <select className="form-control" id="Parking" name="Parking">
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

export default UpdateInfo;