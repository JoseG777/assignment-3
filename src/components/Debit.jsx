import React, { useState, useEffect } from 'react';
import AccountBalance from './AccountBalance';
import axios from 'axios';

const Debits = ({ updateDebits, balance }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        const storedDebits = localStorage.getItem('debits') ? JSON.parse(localStorage.getItem('debits')) : [];
        setData(storedDebits.length > 0 ? storedDebits : []);

        const fetchDebits = async () => {
            if (storedDebits.length === 0) {
                try {
                    const response = await axios.get('https://johnnylaicode.github.io/api/debits.json');
                    const fetchedDebits = response.data;
                    setData(fetchedDebits);
                    localStorage.setItem('debits', JSON.stringify(fetchedDebits));
                    if (updateDebits) updateDebits(fetchedDebits);
                } catch (error) {
                    setError(error.toString());
                }
            }
        };

        fetchDebits();
    }, [updateDebits]);

    const handleAddDebit = (event) => {
        event.preventDefault();
        const newDebit = {
            id: Date.now(),
            description: description,
            amount: parseFloat(amount).toFixed(2),
            date: new Date().toISOString().slice(0, 10),
        };

        const newData = [...data, newDebit];
        setData(newData);
        localStorage.setItem('debits', JSON.stringify(newData));
        if (updateDebits) updateDebits(newData);
        setDescription('');
        setAmount('');
    };

    return (
        <>
            <h1>Debits</h1>
            {error && <p>Error: {error}</p>}
            <ul>
                {data.map((debit) => (
                    <div key={debit.id}>
                        {debit.description} - ${debit.amount} ({debit.date})
                    </div>
                ))}
            </ul>
            <form onSubmit={handleAddDebit}>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Amount:</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button type="submit">Add Debit</button>
            </form>

            <AccountBalance balance={balance} />
        </>
    );
};

export default Debits;