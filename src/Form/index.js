import { useRatesData } from "./useRatesData";
import { useState } from "react";
import { Result } from "./Result";
import {
  StyledForm,
  Currency,
  Field,
  Button,
  ButtonContainer,
  Supplement,
  Loading,
  Failure,
} from "./styled";

export const Form = () => {
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      {ratesData.state === "loading" ? (
        <Loading>Chwileczkę, ładuję kursy walut z EBC</Loading>
      ) : ratesData.state === "error" ? (
        <Failure>
          Strona nie załadowała się. Sprawdź połączenie z internetem i odśwież stronę przeglądarki. <br />
          Jeśli to nie pomoże, postaramy się jak najszybciej usunąć błąd.
        </Failure>
      ) : (
        <>
          <p>
            <Currency>Kwota:</Currency>
            <Field
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              min="0"
              step="0.01"
              name="zl"
              id="zl"
              required
              placeholder="Wpisz kwotę w PLN"
            />
          </p>
          <Currency>Waluta:</Currency>
          <Field
            as="select"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {Object.keys(ratesData.rates).map((currency) => (
              <option 
                key={currency}
                value={currency}
              >
                {currency}
              </option>
            ))}
          </Field>
          <ButtonContainer>
            <Button>Przelicz</Button>
          </ButtonContainer>
          <Result result={result} />
          <Supplement>
            Kursy walut pobrano z Europejskiego Centralnego Banku w dniu{" "}
            {ratesData.date}
          </Supplement>
        </>
      )}
    </StyledForm>
  );
};

export default Form;