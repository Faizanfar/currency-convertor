import { useEffect,useState } from "react";


function useCurrencyInfo(currency){
  const [data,setData]= useState({});
  useEffect (()=>{
    fetch(`https://v6.exchangerate-api.com/v6/c29d48caa8520afc2cb11692/latest/${currency}`)
    .then((res)=>res.json())
    .then((res)=>setData(res.conversion_rates) )
      .catch((err) => {
        console.error("Currency API error:", err);
      });

  },[currency])

  return data;
}

export default useCurrencyInfo;