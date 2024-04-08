import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Credits from './components/Credit';
import Debits from './components/Debit';
import UserProfile from './components/UserProfile';
import NavBar from './components/NavBar';
import axios from 'axios';

// Throughout the code I use localStorage to save the user's data beyond page refreshes.

function App() {
  const [user, setUser] = useState({
    accountBalance: 0,
    creditList: [],
    debitList: [],
    currentUser: { userName: '', memberSince: ''},
    loggedIn: false,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
    const storedLoggedIn = localStorage.getItem('loggedIn') === 'true';

    setUser((prevState) => ({
      ...prevState,
      currentUser: storedUser,
      loggedIn: storedLoggedIn,
    }));

  }, []);

   // For when a user wants to add credits
   const updateCredits = useCallback((newCredits) => {

    setUser((prevState) => ({
      ...prevState,
      creditList: newCredits,
    }));

    // Use local storage to save beyond page refresh
    localStorage.setItem('credits', JSON.stringify(newCredits));

    // eslint-disable-next-line
  }, [user.debitList]);
  
  // For when a user wants to add debits
  const updateDebits = useCallback((newDebits) => {

    setUser((prevState) => ({
      ...prevState,
      debitList: newDebits,
    }));

    // Use local storage to save beyond page refresh
    localStorage.setItem('debits', JSON.stringify(newDebits));

    // eslint-disable-next-line
  }, [user.creditList]);

  useEffect(()=>{
    const storedDebits = localStorage.getItem('debits') ? JSON.parse(localStorage.getItem('debits')) : [];
    const storedCredits = localStorage.getItem('credits') ? JSON.parse(localStorage.getItem('credits')) : [];

    const fetchDebits = async () => {
      if (storedDebits.length === 0) 
      {
          try {
              const response = await axios.get('https://johnnylaicode.github.io/api/debits.json');
              const fetchedDebits = response.data;
              localStorage.setItem('debits', JSON.stringify(fetchedDebits));
              if (updateDebits) updateDebits(fetchedDebits);
          } catch (error) {
              console.log(error)
          }
      }
    };
    const fetchCredits = async () => {
      if(storedCredits.length === 0)
      {
      try {
          const response = await axios.get('https://johnnylaicode.github.io/api/credits.json');
          const fetchedCredits = response.data;
          localStorage.setItem('credits', JSON.stringify(fetchedCredits));
          if (updateCredits) updateCredits(fetchedCredits);
      } catch (error) {
          console.log(error);
      }
    }
  };

    fetchDebits();
    fetchCredits();
    const savedDebits = localStorage.getItem('debits') ? JSON.parse(localStorage.getItem('debits')) : [];
    const savedCredits = localStorage.getItem('credits') ? JSON.parse(localStorage.getItem('credits')) : [];
    let accountBalanceCalculation = 0;

    for (let credit of savedCredits) {
      accountBalanceCalculation += parseFloat(credit.amount);
    }
    for (let debit of savedDebits) {
      accountBalanceCalculation -= parseFloat(debit.amount);
    }

    accountBalanceCalculation = accountBalanceCalculation.toFixed(2);

    setUser((prevState) => ({
      ...prevState,
      accountBalance: accountBalanceCalculation,
    }));

    // eslint-disable-next-line 
  }, [user.loggedIn, updateCredits, updateDebits])

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
    <Router>
      <div className="App">

        <NavBar loggedIn={user.loggedIn} onLogout={handleLogout} />

        <div className="route-content">
          <Routes>

            <Route path="/" element={<Home balance={user.accountBalance} loggedIn={user.loggedIn} userName={user.currentUser.userName}/>} />

            <Route path="/login" element={<Login mockLogIn={mockLogIn} />} />

            <Route path="/profile" element={<UserProfile userName={user.currentUser.userName} memberSince={user.currentUser.memberSince} balance={user.accountBalance}/>} />

            <Route path="/credits" element={<Credits updateCredits={updateCredits} balance={user.accountBalance} />} />

            <Route path="/debits" element={<Debits updateDebits={updateDebits} balance={user.accountBalance} />} />

          </Routes>
        </div>
      </div>
    </Router>
  </>

  );
}

export default App;