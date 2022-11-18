import React from 'react'
import ClientHeader from '../headers/ClientHeader';
import Footer from '../footer/Footer';
import {Outlet} from "react-router-dom";

function ClientLayout() {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default ClientLayout;