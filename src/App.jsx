import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Brands from "./components/Brands";
import ViewerFav from "./components/ViewerFav";
import Offer from "./components/Offer";
const App = () => {
  const [data, setdata] = useState([]);
  let api = "https://almaazkhan1055.github.io/udemy_data/udemy-data.json";
  console.log(data);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((dat) => setdata(dat))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Header headerData={data?.header} />
      <Hero carousel={data?.carousel} />
      <Courses courseList={data?.courseList} />
      <Brands testimonials={data?.testimonials} />
      <ViewerFav ViewersFav={data?.viewersFav} />
      <Offer whatWeOffer={data?.whatWeOffer} />
    </>
  );
};

export default App;
