import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinTable from './CoinTable';
import Navbar from './Navbar';

function App() {
    const [currencies, setCurrencies] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        fetchData();
    }, [offset]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.coincap.io/v2/assets?limit=50&offset=${offset}`);
            const data = response.data.data;
            setCurrencies(prevCurrencies => [...prevCurrencies, ...data]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleLoadMore = () => {
        setOffset(prevOffset => prevOffset + 50);
    };

    return (
        <div className="App">
            <Navbar />
            
            <CoinTable currencies={currencies} />
            <button onClick={handleLoadMore}>Load More</button>
        </div>
    );
}

export default App;
