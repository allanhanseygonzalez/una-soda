import React from "react";
import { ImFacebook } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { SiGooglemaps } from "react-icons/si";
import LogoUNA from "../../../assets/Logo-UNA.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-gray-800 pt-8 pb-6 text-gray-300">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap text-left lg:text-left ">
          <div className="w-full lg:w-6/12 px-4">
            <Link to="">
              <img src={LogoUNA} className="object-scale-down h-20"></img>
            </Link>
            <h5 className="text-2xl mt-2 mb-2">Sistema de Ventas UNA Soda</h5>
            <h5 className="text-lg mt-2 mb-2">
              Universidad Nacional de Costa Rica, Sede Regional Chorotega,
              Campus Liberia.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <a href="">
                <button
                  className="bg-blue-800 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <ImFacebook className="ml-3 " />
                </button>
              </a>
              <a href="">
                <button
                  className="bg-green-600 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <SiGooglemaps className="ml-3 " />
                </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6"></div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center text-gray-300 hover:text-gray-400">
            <div className="text-sm  py-1">
              Copyright © <span id="get-current-year">2022</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className=""
                target="_blank"
              >
                {" "}
              </a>
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className=""
              >
                Universidad Nacional, Costa Rica.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
