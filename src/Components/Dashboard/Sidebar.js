import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
    return (
        <div className="p-3 side-bg">
            <Link to="/BookingList"><FontAwesomeIcon icon={faShoppingBasket} /> All Bookings</Link> <br /> <br />
            <Link to="/AddRent"><FontAwesomeIcon icon={faPlus} /> Add New Room</Link> <br /> <br />
            <Link to="/MyRent"><FontAwesomeIcon icon={faHome} /> My Bookings</Link><br /> <br />
            <Link to="/AddRent"><FontAwesomeIcon icon={faPlus} /> Update Room info</Link> <br /> <br />
            <Link to="/MyRent"><FontAwesomeIcon icon={faPlus} /> Make New Admin</Link>
        </div>
    );
};

export default Sidebar;