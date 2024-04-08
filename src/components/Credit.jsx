import React, { useState /*, useEffect */ } from 'react';
import AccountBalance from './AccountBalance';
// import axios from 'axios';

const Credits = ({ updateCredits, balance }) => {
    // const [data, setData] = useState([]);
    // const [error, setError] = useState(null);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    /*
    useEffect(() => {
        const storedCredits = localStorage.getItem('credits') ? JSON.parse(localStorage.getItem('credits')) : [];

        if (storedCredits.length > 0) {
            setData(storedCredits);
        } else {
            const fetchCredits = async () => {
                try {
                    const response = await axios.get('https://johnnylaicode.github.io/api/credits.json');
                    const fetchedCredits = response.data;
                    setData(fetchedCredits);
                    localStorage.setItem('credits', JSON.stringify(fetchedCredits));
                    if (updateCredits) updateCredits(fetchedCredits);
                } catch (error) {
                    setError(error.toString());
                }
            };

            fetchCredits();
        }
    }, [updateCredits]);
    */

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
            <h1>Credits</h1>
            {error && <p>Error: {error}</p>}
            <ul>
                {data.map((credit) => (
                    <div key={credit.id}>
                        {credit.description} - ${credit.amount} ({credit.date})
                    </div>
                ))}
            </ul>
            <form onSubmit={handleAddCredit}>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Amount:</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button type="submit">Add Credit</button>
            </form>

            <AccountBalance balance={balance} />

        </>
    );
};

export default Credits;
