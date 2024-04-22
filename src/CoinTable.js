import React from 'react';
import CoinRow from './CoinRow';

const CoinTable = ({ currencies }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Icon</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>Volume</th>
                </tr>
            </thead>
            <tbody>
                {currencies.map((currency, index) => (
                    <CoinRow key={currency.id} index={index + 1} currency={currency} />
                ))}
            </tbody>
        </table>
    );
};

export default CoinTable;
