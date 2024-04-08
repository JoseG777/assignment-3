import React, { useState, useEffect } from 'react';
import AccountBalance from './AccountBalance';
import axios from 'axios';
import '../styles/Transactions.css';

const Credits = ({ updateCredits, balance }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        const storedCredits = localStorage.getItem('credits') ? JSON.parse(localStorage.getItem('credits')) : [];
        setData(storedCredits.length > 0 ? storedCredits : []);


        const fetchCredits = async () => {
            if (storedCredits.length === 0) {
                try {
                    const response = await axios.get('https://johnnylaicode.github.io/api/credits.json');
                    const fetchedCredits = response.data;
                    setData(fetchedCredits);
                    localStorage.setItem('credits', JSON.stringify(fetchedCredits));
                    if (updateCredits) updateCredits(fetchedCredits);
                } catch (error) {
                    setError(error.toString());
                }
            }
        };

        fetchCredits();

    }, [updateCredits]);

    const handleAddCredit = (event) => {
        event.preventDefault();
        const newCredit = {
            id: Date.now(),
            description,
            amount: parseFloat(amount).toFixed(2),
            date: new Date().toISOString().slice(0, 10),
        };

        const newData = [...data, newCredit];
        setData(newData);
        localStorage.setItem('credits', JSON.stringify(newData));
        if (updateCredits) updateCredits(newData);

        setDescription('');
        setAmount('');
    };

    return (
        <>
            <div className="transaction-container">
                <h1 className="transaction-header">Credits</h1>
                {error && <p>{error}</p>}
                <ul className="transaction-list">
                    {data.map((credit) => (
                        <div key={credit.id} className="transaction-item">
                            {credit.description} - ${credit.amount} ({credit.date.slice(0, 10)})
                        </div>
                    ))}
                </ul>

                <form onSubmit={handleAddCredit} className="transaction-form">
                    Add a new credit:
                    <br />
                    <label>
                        Description:
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="transaction-input"
                        />

                        Amount:
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="transaction-input"
                        />
                    </label>
                    <button type="submit" className="transaction-button">Add Credit</button>
                </form>
                <AccountBalance balance={balance} />
            </div>

        </>
    );
};

export default Credits;