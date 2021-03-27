import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faHouseUser, faPlus, faUserEdit, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
    return (
        <div className="p-3 side-bg" >
            <Link style={{color:'#275a53'}} to="/BookingList"><FontAwesomeIcon icon={faUsers} /> All Bookings</Link> <br /> <br />
            <Link style={{color:'#275a53'}} to="/MyRent"><FontAwesomeIcon icon={faHouseUser} /> My Bookings</Link><br /> <br />
            <Link style={{color:'#275a53'}} to="/AddRent"><FontAwesomeIcon icon={faPlus} /> Add New Room</Link> <br /> <br />
            <Link style={{color:'#275a53'}} to="/updateInfo"><FontAwesomeIcon icon={faUserEdit} /> Update Room info</Link> <br /> <br />
            <Link style={{color:'#275a53'}} to="/makeAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make New Admin</Link>
        </div>
    );
};

export default Sidebar;