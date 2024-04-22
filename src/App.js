import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinTable from './CoinTable';
import Navbar from './Navbar';

function App() {
    const [currencies, setCurrencies] = useState([]);
    const [offset, setOffset] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const [sortCriteria, setSortCriteria] = useState('rank');
    const [filteredCurrencies, setFilteredCurrencies] = useState([]);

    useEffect(() => {
        fetchData();
    }, [offset]);

    useEffect(() => {
        setFilteredCurrencies(currencies.filter(currency => {
            return currency.name.toLowerCase().includes(searchInput.toLowerCase());
        }));
    }, [currencies, searchInput]);

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

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSort = (criteria) => {
        setSortCriteria(criteria);
    };

    const sortCurrencies = () => {
        const sortedCurrencies = [...filteredCurrencies];
        sortedCurrencies.sort((a, b) => {
            if (sortCriteria === 'rank') {
                return a.rank - b.rank;
            } else if (sortCriteria === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortCriteria === 'price') {
                return a.priceUsd - b.priceUsd;
            }
            return 0;
        });
        setFilteredCurrencies(sortedCurrencies);
    };

    useEffect(() => {
        sortCurrencies();
    }, [sortCriteria]);

    return (
        <div className="App">
            <Navbar onSearch={handleSearch} />
            <CoinTable currencies={filteredCurrencies} onSort={handleSort} />
            <button onClick={handleLoadMore}>Load More</button>
        </div>
    );
}

export default App;
