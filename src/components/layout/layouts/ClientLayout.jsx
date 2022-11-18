import React from 'react'
import ClientHeader from '../headers/ClientHeader';
import ClientFooter from '../footers/ClientFooter';
import {Outlet} from "react-router-dom";

function ClientLayout() {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    <ClientFooter/>
    </>
  );
}

export default ClientLayout;