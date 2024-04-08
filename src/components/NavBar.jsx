import React from 'react';
import logo from '../logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/NavBar.css'

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
            <header className="App-header">
                <div className="logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1><Link to="/" className="nav-link">Bank of React</Link></h1>
                </div>
                <nav className="nav-container">
                    <Link to="/" className="nav-link">Home</Link>
                    {!loggedIn ? (
                        <Link to="/login" className="nav-link">Login</Link>
                    ) : (
                        <>
                            <Link to="/profile" className="nav-link">User Profile</Link>
                            <Link to="/debits" className="nav-link">Debits</Link>
                            <Link to="/credits" className="nav-link">Credits</Link>
                            <Link to="/" onClick={handleLogout} className="nav-link">Logout</Link>
                        </>
                    )}
                </nav>
            </header>
        </>
    );
};

export default NavBar;
