import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faPlus, faUserEdit, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
const Sidebar = () => {
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const url = 'http://localhost:5000/isAdmin'
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        }).then(res => res.json()).then(data => setAdmin(data))
    }, []);
    return (
        <div className="p-3 side-bg" >
            {admin && 
            <Link style={{ color: '#275a53' }} to="/BookingList"><FontAwesomeIcon icon={faUsers} /> All Bookings</Link>} 
            <br /> <br />
            <Link style={{ color: '#275a53' }} to="/MyRent"><FontAwesomeIcon icon={faHouseUser} /> My Bookings</Link>
            <br /> <br />
            {admin && 
            <Link style={{ color: '#275a53' }} to="/AddRent"><FontAwesomeIcon icon={faPlus} /> Add New Room</Link>} 
            <br /> <br />
            {admin && 
            <Link style={{ color: '#275a53' }} to="/updateInfo"><FontAwesomeIcon icon={faUserEdit} /> Update Room info</Link>} 
            <br /> <br />
            {admin && 
            <Link style={{ color: '#275a53' }} to="/makeAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make New Admin</Link>}
        </div>
    );
};

export default Sidebar;