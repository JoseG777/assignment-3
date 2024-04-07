import React from 'react';

const UserProfile = ({ userName, memberSince }) => {
    return (
        <>
            <h1>User Profile</h1>
            <p>Username : {userName}</p>
            <p>Member Since : {memberSince}</p>
        </>
    )
}
export default UserProfile;