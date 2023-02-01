import React, { useState} from 'react';
import CurrencySelect from "./CurrencySelect";
import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import Result from "./Result";
import Button from "./Button";

function App() {
  const curriences = [
    {id: 1, name: "Euro", shortName: "EUR", rate: "4,75" },
    {id: 2, name: "Korona czeska", shortName: "CZK", rate: "0,20" },
    {id: 3, name: "Forint węgierski", shortName: "HUF", rate: "1,21" },
  ];

  return (
    <Container>
      <Header title="Kalkulator walutowy" />
      <Form
        title={<Header />}
        />
        firstLabel= Waluta: {
          <CurrencySelect
          curriences={curriences}
          />
        }
        <Button  />
        <Result />
     </Container>
    );  
   
}

export default App;
