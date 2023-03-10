import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://api.exchangerate.host/latest?base=PLN";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const getRatesData = async () => {
      try {
        const {
          data: { rates, date },
        } = await axios.get(API_URL);

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

    setTimeout(getRatesData, 1000);
  }, []);

  return ratesData;
};
