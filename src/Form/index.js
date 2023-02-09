import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";

export const Form = ({ calculateResult, result}) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit =(event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
        
          <h1 className="form__header">Kalkulator walut</h1>
          <p>
        <span className="form__currency">Kwota:</span>
        <input
          value={amount}
          onChange= {({target}) => setAmount(target.value)}
          className="form__field"
          type="number" min="0"
          step="0.01"
          name="zl"
          id="zl"
          required
          placeholder="Wpisz kwotę w PLN"
        />
          </p>
        <span className="form__currency">Waluta: </span>
        <select
          value= {currency}
          className="form__field"
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
        <p className="form__buttonContainer">
          <button className="form__button">Przelicz</button>
        </p>

      <Result result={result} />
        <p className="form__supplement"> Kurs z 2.02.2023r.</p>

    </form>
    );
  };
