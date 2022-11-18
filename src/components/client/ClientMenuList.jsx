import React from "react";

function ClientMenuList() {
  return (
    <>
      <div
        className="z-20 relative text-black container mx-auto italic font-serif text-center 
  text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-5 md:p-40"
      >
        <h1 className="mb-6">UNA Soda</h1>
        <h1 className="mb-6">Menú Semanal</h1>
        <h1 className="mb-6">Lunes: Arroz con pollo, frijoles y ensalada.</h1>
        <h1 className="mb-6">Martes: Pollo frito, arroz, frijoles y ensalada</h1>
        <h1 className="mb-6">Miércoles: Spaghetti en salsa blanca.</h1>
        <h1 className="mb-6">Jueves: Pescado empanizado con puré de papa.</h1>
        <h1 className="mb-6">Viernes: Canelones con arroz, frijoles y ensalada.</h1>
        <h1 className="mb-6">Sábado: Cerrado.</h1>
      </div>
    </>
  );
}

export default ClientMenuList;
