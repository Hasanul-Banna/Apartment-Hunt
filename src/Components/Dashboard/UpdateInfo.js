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
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <input type="number" className="form-control" placeholder="Enter updated price" />
                            </div>
                            <div className="col-md-4">
                                <input className="btn btn-info w-50" type="submit" value="Update Price" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpdateInfo;