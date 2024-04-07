import React from 'react';
//  <Route path="/profile" element={<UserProfile userName={user.currentUser.userName} memberSince={user.currentUser.memberSince} />} />

function UserProfile({ userName, memberSince }) {
    return (
        <>
            <h1>User Profile</h1>
        </>
    );
}

export default UserProfile;