import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ loggedIn, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (onLogout) {
            onLogout();
        }
        navigate('/login');
    };

    return (
        <>
            <Link to="/"> Home | </Link>
            {!loggedIn ? (
                <Link to="/login"> Login | </Link>
            ) : (
                <>
                    <Link to="/profile"> User Profile | </Link>
                    <Link to="/login" onClick={handleLogout}> Logout | </Link>
                    <Link to="/debits"> Debits | </Link>
                    <Link to="/credits"> Credits | </Link>
                </>
            )}
        </>
    );
};

export default NavBar;
