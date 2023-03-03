import { useState, useEffect } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        staus: "loading",
    });
    
    useEffect(() => {
       const fetchRates  = async () => {
          try {
             const response = await fetch("https://api.exchangerate.host/latest?base=PLN");

             if (!response.ok) {
              throw new Error(response.statusText);
             }
           
             const { rates, date } = await response.json();

             setRatesData({
                state: "success",
                rates,
                date, 
             });
          } catch {
              setRatesData({
                 status: "error",
           });
        }
    };
     setTimeout(fetchRates, 3000);
}, []);

return ratesData;
};