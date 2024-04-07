import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Credits from './components/Credit';
import Debits from './components/Debit';
import UserProfile from './components/UserProfile';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState({
    accountBalance: 0,
    creditList: [],
    debitList: [],
    currentUser: { userName: '', memberSince: ''},
    loggedIn: false,
  });

  const mockLogIn = (logInInfo) => {
    const currentDate = new Date().toLocaleDateString();

    // set username and member since date
    setUser((prevState) => ({
      ...prevState,
      currentUser: { 
        userName: logInInfo.userName, 
        memberSince: currentDate 
      },
      loggedIn: true,
    }));
    
    // Use local storage to save beyond page refresh
    localStorage.setItem('user', JSON.stringify({
      userName: logInInfo.userName,
      memberSince: currentDate
    }));

    // Set loggedIn to true for view changes
    localStorage.setItem('loggedIn', true);
  };

  // For when a user wants to add credits
  const updateCredits = useCallback((newCredits) => {
    setUser((prevState) => ({
      ...prevState,
      creditList: newCredits,
    }));

    // Use local storage to save beyond page refresh
    localStorage.setItem('credits', JSON.stringify(newCredits));
  }, []);
  
  // For when a user wants to add debits
  const updateDebits = useCallback((newDebits) => {

    setUser((prevState) => ({
      ...prevState,
      debitList: newDebits,
    }));

    // Use local storage to save beyond page refresh
    localStorage.setItem('debits', JSON.stringify(newDebits));

  }, []);

  const handleLogout = () => {
    localStorage.clear();

    setUser({
        accountBalance: 0,
        creditList: [],
        debitList: [],
        currentUser: {
            userName: '',
            memberSince: '',
        },
        loggedIn: false,
    });
};

  return (
    <>
    <Router loggedIn = {user.loggedIn}>
      <div className="App">
        <Routes>
        <NavBar loggedIn={user.loggedIn} onLogout={handleLogout} />
          <Route path="/" element={<Home balance={user.accountBalance} />} />
          <Route path="/login" element={<Login mockLogIn={mockLogIn} />} />
          <Route path="/profile" element={<UserProfile userName={user.currentUser.userName} memberSince={user.currentUser.memberSince} />} />
          <Route path="/credits" element={<Credits updateCredits={updateCredits} balance={user.accountBalance} />} />
          <Route path="/debits" element={<Debits updateDebits={updateDebits} balance={user.accountBalance}/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
