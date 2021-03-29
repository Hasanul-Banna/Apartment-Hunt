import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/bookings'
        fetch(url).then(res => res.json()).then(data => setBookings(data))
    }, []);
    
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
                                <th scope="col">Room type</th>
                                <th scope="col">Location</th>
                            </tr>
                        </thead>
                        {
                            bookings.map((x) =>
                                <tbody>
                                    <tr>
                                        <td>{x.userName}</td>
                                        <td>{x.email}</td>
                                        <td>{x.mobile}</td>
                                        <td>{x.RoomType}</td>
                                        <td>{x.location}</td>
                                    </tr>
                                </tbody>)
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingList;