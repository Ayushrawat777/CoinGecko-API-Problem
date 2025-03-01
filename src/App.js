import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
import "./App.css";
const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data);
      setData(response.data); // Get the first object
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Cryptocurrency Data</h1>
      <Table data={data} />
    </div>
  );
}

export default App;
