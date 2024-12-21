import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  let api = "https://almaazkhan1055.github.io/udemy_data/udemy-data.json";
  const [data, setdata] = useState([]);
  console.log(data, "jccjkjj");

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((dat) => setdata(dat))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Header headerData={data?.header} />
      <Hero carousel={data?.carousel} />
    </div>
  );
};

export default App;
