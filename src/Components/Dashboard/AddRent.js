import React from 'react';
import Sidebar from './Sidebar';

const AddRent = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <span>Apartment Title</span>
                                <input type="text" className="form-control" />
                                <span>Location</span>
                                <input type="text" className="form-control" />
                                <span>No. of Bathroom</span>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <span>Price</span>
                                <input type="text" className="form-control" />
                                <span>No. of Bedroom</span>
                                <input type="number" className="form-control" />
                                <span>Thumbnail</span>
                                <input type="file" className="form-control" />
                            </div>
                        </div> <br/> 
                        <input className="btn btn-info w-100" type="submit" value="Submit"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRent;