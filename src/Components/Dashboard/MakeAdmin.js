import React from 'react';
import Sidebar from './Sidebar';
const MakeAdmin = () => {
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
                                <input type="text" className="form-control" placeholder="New Admin's Email Address"/>
                            </div>
                            <div className="col-md-4">
                            <input className="btn btn-info w-50" type="submit" value="Make Admin"/>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;