import React from 'react';
import CoinRow from './CoinRow';
import './CoinTable.css'; // Import the CSS file

const CoinTable = ({ currencies, onSort }) => {
    return (
        <div className="cryptoContainer"> {/* Updated class name */}
            <table >
                <thead className= "cryptoInfo">
                    <tr >
                        <th onClick={() => onSort('rank')}>Rank</th>
                        <th>Icon</th>
                        <th onClick={() => onSort('name')}>Name</th>
                        <th>Symbol</th>
                        <th onClick={() => onSort('price')}>Price</th>
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
        </div>
    );
};

export default CoinTable;
