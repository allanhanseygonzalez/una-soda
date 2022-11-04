import React from "react";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { IoKey } from "react-icons/io5";
import LogoUNA from '../../assets/Logo-UNA.png';

function Login() {
  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center content-center text-sm text-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
            <div>
            <img className=" object-scale-down h-40 w-96" src={LogoUNA}>
            </img>
            </div>
            <h1 className=" leading-tight tracking-tight text-red-900 md:text-2xl">
              Sistema de Ventas UNA Soda
            </h1>
            <h1 className="leading-tight tracking-tight text-sky-900 md:text-md">
              INICIAR SESIÓN
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="relative block">
                  <span className="absolute inset-y-0 right-0 mr-2 flex items-center pl-3">
                    <IoPerson className="h-5 w-5"></IoPerson>
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" bg-gray-50  text-gray-900 sm:text-sm rounded focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                    placeholder="Identificación"
                    required=""
                  />
                </label>
              </div>
              <div>
                <label className="relative block">
                  <span className="absolute inset-y-0 right-0 mr-2 flex items-center pl-3">
                    <IoKey className="h-5 w-5"></IoKey>
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                    className=" bg-gray-50  text-gray-900 sm:text-sm rounded-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                    required=""
                  />
                </label>
              </div>
              <div className="justify-center content-center place-items-center">
              <button
                type="submit"
                className="flex flex-col relative m-auto text-white font-sm rounded-md px-8 py-2.5 bg-sky-700 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 sm:px-16 sm:py-2.5"
              >
                Iniciar Sesión
              </button>
              </div>
              <Link
                href="#"
                className=" flex flex-col  md:text-md text-center text-sky-700  hover:underline "
              >
                ¿Olvidaste la contraseña?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
