import React, { useState } from 'react';


const currencies = ["EUR", "CZK", "HUF"];

const CurrencySelect = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");

    return (
      <select value={selectedCurrency} onChange={e => setSelectedCurrency(e.target.value)}>
        {currencies.map(currency => (
            <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
    );
};

export default CurrencySelect;