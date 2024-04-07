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

  // comment for pr, git merge NavBar from main file didn't show pull request

  return (
    <>
    <Router loggedIn = {user.loggedIn}>
      <div className="App">
        <Routes>
      
          <Route path="/" element={<Home balance={user.accountBalance} loggedIn={user.loggedIn} userName={user.currentUser.userName} />} />

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
