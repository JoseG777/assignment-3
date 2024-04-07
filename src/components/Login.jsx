import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ mockLogIn }) => {
    const [userName, setUserName] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        mockLogIn({ userName });
        localStorage.setItem('userName', userName);
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('memberSince', new Date());
        setUserName('');
        navigate('/');
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />

                <br />

                <button type="submit">Log In</button>
            </form>
        </>
    );
}

export default Login;
