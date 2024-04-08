import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';
import UserProfile from './components/UserProfile';
import NavBar from './components/NavBar';
import axios from 'axios';

function App() {
  const [user, setUser] = useState({
    accountBalance: 0,
    creditList: [],
    debitList: [],
    currentUser: {
      userName: '',
      memberSince: '',
    },
    loggedIn: false,
  });

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUser(prevState => ({ ...prevState, currentUser: user, loggedIn: true }));
      fetchData(); 
    }
  }, []);

  const fetchData = async () => {
    try {
      const creditsResponse = await axios.get('https://your-api/credits');
      const debitsResponse = await axios.get('https://your-api/debits');
      const credits = creditsResponse.data;
      const debits = debitsResponse.data;
      updateAccountData(credits, debits);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateAccountData = (credits, debits) => {
    const accountBalance = calculateAccountBalance(credits, debits);
    setUser(prevState => ({
      ...prevState,
      accountBalance,
      creditList: credits,
      debitList: debits,
    }));
    localStorage.setItem('credits', JSON.stringify(credits));
    localStorage.setItem('debits', JSON.stringify(debits));
  };

  const calculateAccountBalance = (credits, debits) => {
    let accountBalanceCalculation = 0;
    for (let credit of credits) {
      accountBalanceCalculation += parseFloat(credit.amount);
    }
    for (let debit of debits) {
      accountBalanceCalculation -= parseFloat(debit.amount);
    }
    return accountBalanceCalculation.toFixed(2); 
  };

  const mockLogIn = logInInfo => {
    const currentDate = new Date().toLocaleDateString();
    const userInfo = { ...logInInfo, memberSince: currentDate, loggedIn: true };
    setUser(prevState => ({ ...prevState, currentUser: userInfo, loggedIn: true }));
    localStorage.setItem('user', JSON.stringify(userInfo));
    fetchData(); 
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser({
      accountBalance: 0,
      creditList: [],
      debitList: [],
      currentUser: { userName: '', memberSince: '' },
      loggedIn: false,
    });
  };

  return (
    <Router>
      <NavBar loggedIn={user.loggedIn} onLogout={handleLogout} />
      <div className="App">
        <Routes>

          <Route path="/" element={<Home balance={user.accountBalance} />} />

          <Route path="/login" element={<Login mockLogIn={mockLogIn} />} />

          <Route path="/profile" element={<UserProfile {...user.currentUser} />} />

          <Route path="/credits" element={<Credits credits={user.creditList} updateCredits={updateAccountData} />} />

          <Route path="/debits" element={<Debits debits={user.debitList} updateDebits={updateAccountData} />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
