import React from 'react';

const UserProfile = ({ userName, memberSince, balance }) => {
    return (
        <>
            <h1> User Profile </h1>
            <p> Username : {userName} </p>
            <p> Member Since : {memberSince} </p>
            <p> Account Balance : ${balance} </p>
        </>
    )
}
export default UserProfile;