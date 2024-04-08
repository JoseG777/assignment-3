import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';

function Home({ balance, loggedIn, userName }) {

    const logoStyle = {
        height: '20vmin',
        width: 'auto'
    };

    return (
        <>
            <img src={logo} className="App-logo" alt="logo" style={logoStyle} />

            {loggedIn ?
                (
                    <>
                        <h1>Welcome, {userName}</h1>
                        <AccountBalance balance={balance} />
                    </>
                )
                :
                (
                    <h1>Please <Link to="/login"> log in </Link> to use the Bank of React</h1>

                )
            }


        </>
    );
}

export default Home;