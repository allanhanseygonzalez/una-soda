import React from "react";
import EstanteTienda from "../../../assets/estante-tienda.jpeg";
import MenuRest from "../../../assets/menu-rest.jpeg";
import Clock from "../../../assets/clock.jpeg";
import { Link } from "react-router-dom";

function ClientDashboard() {
  return (
    <div className="w-full min-h-screen bg-gray-200 p-6">
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="object-cover h-full" src={EstanteTienda} alt="" />
          <h2 className="mt-4 text-center px-2 pb-5">Productos en Venta</h2>
          <a
            href="/product/list"
            className="bg-sky-900 text-white p-3 text-center hover:bg-sky-800 transition-all duration-500"
          >
            Ver
          </a>
        </div>
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="object-cover h-full" src={MenuRest} alt="" />
          <h2 className="mt-4 text-center px-2 pb-5">Menú de la semana</h2>
          <a
            href="#"
            className="bg-sky-900 text-white p-3 text-center hover:bg-sky-800 transition-all duration-500"
          >
            Ver
          </a>
        </div>
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="object-cover h-full" src={Clock} alt="" />
          <h2 className="mt-4 text-center px-2 pb-5">Horario semanal</h2>
          <a
            href="#"
            className="bg-sky-900 text-white p-3 text-center hover:bg-sky-800 transition-all duration-500"
          >
            Ver
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
