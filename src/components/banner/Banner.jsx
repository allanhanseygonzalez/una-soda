import React from 'react'
import ImagenSoda from "../../assets/imagen_soda.png";

function Banner() {
  return (
    <section className="relative top-0 py-24 px-4">
    <div className="z-20 relative text-white container mx-auto italic font-serif text-center 
    text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl ">
    <h1 className="mb-6">UNA Soda</h1>
    <h1 className="mb-6">Horario de hoy: 8:00 a.m - 4:30 p.m</h1>
    <h1 className="mb-6">Menu del Día: Arroz con pollo</h1>
    </div>
    <div className="absolute inset-0 h-auto z-10">
      <img src={ImagenSoda} alt="" className="h-full w-full object-cover brightness-50"/>
    </div>
  </section>
  )
}

export default Banner;