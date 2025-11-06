import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates || {}))
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
