import React from "react";
import EstanteTienda from "../../assets/estante-tienda.jpeg";
import MenuRest from "../../assets/menu-rest.jpeg";
import Clock from "../../assets/clock.jpeg";
import Sales from "../../assets/sales.png";
import { Link } from "react-router-dom";
import CashMachine from "../../assets/cashmachine.png";

function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-gray-200 p-6">
      <h1 className=" text-xl text-center md:text-3xl md:mt-12 mb-20">
        Sistema de Ventas <span className="text-red-700">UNA</span> Soda
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="object-cover h-full" src={EstanteTienda} alt="" />
          <h2 className="mt-4 text-center px-2 pb-5">Productos</h2>
          <a href="/employee/product/list" className="bg-sky-900 text-white p-3 text-center hover:bg-sky-800 transition-all duration-500" >
            Gestionar
          </a>
        </div>
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="object-cover h-full" src={MenuRest} alt="" />
          <h2 className="mt-4 text-center px-2 pb-5">Menú</h2>
          <a href="/employee/menu/list" className="bg-sky-900 text-white p-3 text-center hover:bg-sky-800 transition-all duration-500" >
            Gestionar
          </a>
        </div>
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="object-cover h-full" src={Clock} alt="" />
          <h2 className="mt-4 text-center px-2 pb-5">Horarios</h2>
          <a href="/employee/schedule/list" className="bg-sky-900 text-white p-3 text-center hover:bg-sky-800 transition-all duration-500" >
            Gestionar
          </a>
        </div>
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="object-cover h-full" src={Sales} alt="" />
          <h2 className="mt-4 text-center px-2 pb-5">Ventas</h2>
          <a href="/employee/sales/list" className="bg-sky-900 text-white p-3 text-center hover:bg-sky-800 transition-all duration-500" >
            Gestionar
          </a>
        </div>
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
        <img className="object-cover h-full" src={CashMachine} alt="" />
        <h2 className="mt-4 text-center px-2 pb-5">Vender</h2>
        <a href="/employee/sales/sell" className="bg-sky-900 text-white p-3 text-center hover:bg-sky-800 transition-all duration-500" >
          Realizar
        </a>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
