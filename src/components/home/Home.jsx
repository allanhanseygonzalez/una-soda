import React from "react";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Home;