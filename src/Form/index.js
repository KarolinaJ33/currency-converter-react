import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";
import { Sheet, Currency, Field, Button, ButtonContainer, Supplement } from "./styled";

export const Form = ({ calculateResult, result}) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit =(event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <Sheet 
      onSubmit={onSubmit}
    >
    <p>
        <Currency>
          Kwota:
        </Currency>
        <Field
          value={amount}
          onChange= {({target}) => setAmount(target.value)}
          type="number" min="0"
          step="0.01"
          name="zl"
          id="zl"
          required
          placeholder="Wpisz kwotę w PLN"
        />
          </p>
        <Currency>
          Waluta: 
        </Currency>
        <Field
          as="select"
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
        </Field>
        <ButtonContainer>
          <Button>Przelicz</Button>
        </ButtonContainer>

      <Result result={result} />
        <Supplement> Kurs z 2.02.2023r.</Supplement>

    </Sheet>
    );
  };
