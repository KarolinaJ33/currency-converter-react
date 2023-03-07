import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });
    
    useEffect(() => {
      const API_URL = "https://api.exchangerate.host/latest?base=PLN";

       const fetchRates = async () => {
          try {
             const response = await fetch(API_URL);

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
                 state: "error",
             });
          }
       };

      setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};