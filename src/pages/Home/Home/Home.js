import React from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Services/>
      <Footer/>
    </>
  );
};

export default Home;
