
import React, { useState, useEffect } from "react";
// import axios from "axios";
import { ProductList } from "../home/ProductList";
import { Slider } from "../home/Silder";
import { fetchData, fetchLowestPriceData } from '../ApiCallService/ApiCall'






export function Home() {
  const [data, setData] = useState([]);
  const [getLowst, setLowest] = useState([]);


  useEffect(() => {
    async function dataFetch() {

      const res = await fetchData();
      if (res) {
        setData(res.data.data);

      }
    }
    async function lowestDataFetch() {

      const res = await fetchLowestPriceData();
      if (res) {
        setLowest(res.data.data);

      }
    }
    lowestDataFetch()
    dataFetch()
  }, []);


  return (
    <>

      <Slider />
      <ProductList productL={data} />
      <ProductList productL={getLowst} />


    </>
  );
}

