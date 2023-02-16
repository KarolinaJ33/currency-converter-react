import { useState } from "react";
import { currencies } from "./currencies";
import { Form } from "./Form";
import { Clock } from "./Clock";
import Container from "./Container";
import Header from "./Header";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <Container>
       <Clock />
       <Header />
       <Form result={result} calculateResult={calculateResult} />
    </Container>
  );
}

export default App;
