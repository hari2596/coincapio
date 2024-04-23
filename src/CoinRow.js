import React, { useState, useEffect } from 'react';
import './CoinRow.css';

const CoinRow = ({ index, currency }) => {
    const [inrRate, setInrRate] = useState(null);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                const data = await response.json();
                setInrRate(data.rates.INR);
            } catch (error) {
                console.error('Error fetching exchange rate:', error);
            }
        };

        fetchExchangeRate();
    }, []);

    return (
        <tr>
            <td>{index}</td>
            <td>
                <img
                    src={`https://assets.coincap.io/assets/icons/${currency.symbol.toLowerCase()}@2x.png`}
                    alt={currency.name}
                    className="coin-icon"
                />
            </td>
            <td>{currency.name}</td>
            <td>{currency.symbol}</td>
            <td>{inrRate ? `₹${(currency.priceUsd * inrRate).toFixed(2)}` : 'Loading...'}</td>
            <td>{inrRate ? `₹${(currency.marketCapUsd * inrRate).toFixed(2)}` : 'Loading...'}</td>
            <td>{inrRate ? `₹${(currency.volumeUsd24Hr * inrRate).toFixed(2)}` : 'Loading...'}</td>
        </tr>
    );
};

export default CoinRow;
