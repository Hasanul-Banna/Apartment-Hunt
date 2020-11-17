import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Sidebar from './Sidebar';

const BookingList = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Messsage</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Steve Jobless </td>
                                <td>Apartment.Hunt@gmail.com</td>
                                <td>+8801712000000</td>
                                <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fugit velit ipsa.</td>
                                <td>
                                    <select name="status" id="status">
                                        <option value="Pending">Pending</option>
                                        <option value="On going">On going</option>
                                        <option value="Done">Done</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Steve Jobless </td>
                                <td>Apartment.Hunt@gmail.com</td>
                                <td>+8801712000000</td>
                                <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fugit velit ipsa.</td>
                                <td>
                                    <select name="status" id="status">
                                        <option value="Pending">Pending</option>
                                        <option value="On going">On going</option>
                                        <option value="Done">Done</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Steve Jobless </td>
                                <td>Apartment.Hunt@gmail.com</td>
                                <td>+8801712000000</td>
                                <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fugit velit ipsa.</td>
                                <td>
                                    <select name="status" id="status">
                                        <option value="Pending">Pending</option>
                                        <option value="On going">On going</option>
                                        <option value="Done">Done</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingList;