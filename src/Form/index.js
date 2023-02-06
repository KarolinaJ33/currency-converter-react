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
    <fieldset className="fieldset">
    <legend className="fieldset__legend">Kalkulator walut</legend>
    <p>
    <span className="fieldset__currency">Kwota:</span>
    <input
    value={amount}
    onChange= {({target}) => setAmount(target.value)}
    className="fieldset__output"
    type="number"
    step="0.1"
    name="zl"
    id="zl"
    required
    placeholder="Wpisz kwotę w PLN"
    />
    </p>
    <span className="fieldset__currency">Waluta: </span>
    <select className="fieldset__output"
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
      <p className="fieldset__buttonContainer">
      <button className="fieldset__button">Przelicz</button>
      </p>

      <Result result={result}/>
      <p> Kurs z 2.02.2023r.</p>

    </fieldset>
    </form>
    );
  };
