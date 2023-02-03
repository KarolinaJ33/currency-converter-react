import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react";

export const Form = ({ calculateResult, result}) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit =(event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <fieldset className="fieldset">
    <legend> Kalkulator walut</legend>
    <span className="fieldset__currency">Kwota:</span>
    <input
    value={amount}
    onChange= {({target}) => setAmount(target.value)}
    type="number"
    step="0.1"
    name="zl"
    id="zl"
    required
    placeholder="Wpisz kwotę"
    />
    <span className="fieldset__currency">Waluta: </span>
    <select
    value= {currency}
    onChange= {({target}) => setCurrency(target.value)}
    >
      {currencies.map((currency => (
        <option
        key={currency.short}
        value={currency.short}
        >
          {currency.name}
        </option>
      )))}
      </select>
      <button>Przelicz</button>
      
    </fieldset>
    );
  };
