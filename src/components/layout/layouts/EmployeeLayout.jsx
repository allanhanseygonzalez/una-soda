import React from "react";
import EmployeeHeader from "../headers/EmployeeHeader";
import Footer from "../footers/EmployeeFooter";
import { Outlet } from "react-router-dom";

function EmployeeLayout() {
  return (
    <>
      <EmployeeHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default EmployeeLayout;
