import React from 'react';
//<Route path="/" element={<Home balance={user.accountBalance} />} />

function Home(balance) {
    return (
        <>
            <h1>Home</h1>
            <h2>Account Balance: ${balance}</h2>
        </>
    );
}

export default Home;