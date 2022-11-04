import React from "react";
import EstanteTienda from "../../../assets/estante-tienda.jpeg";
import MenuRest from "../../../assets/menu-rest.jpeg";
import Clock from "../../../assets/clock.jpeg";
import { Link } from "react-router-dom";

function ClientDashboard() {
  return (
    <div class="w-full min-h-screen bg-gray-200 p-6">
      <div class="flex flex-wrap justify-center">
        <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="object-cover h-full" src={EstanteTienda} alt="" />
          <h2 class="mt-4 text-center px-2 pb-5">Productos en Venta</h2>
          <a
            href="/product/list"
            class="bg-sky-900 text-white p-3 text-center hover:bg-sky-800 transition-all duration-500"
          >
            Ver
          </a>
        </div>
        <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="object-cover h-full" src={MenuRest} alt="" />
          <h2 class="mt-4 text-center px-2 pb-5">Menú de la semana</h2>
          <a
            href="#"
            class="bg-sky-900 text-white p-3 text-center hover:bg-sky-800 transition-all duration-500"
          >
            Ver
          </a>
        </div>
        <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="object-cover h-full" src={Clock} alt="" />
          <h2 class="mt-4 text-center px-2 pb-5">Horario semanal</h2>
          <a
            href="#"
            class="bg-sky-900 text-white p-3 text-center hover:bg-sky-800 transition-all duration-500"
          >
            Ver
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
