import React from "react";

function SalesModule() {
  return (
    <div className="min-h-screen w-full bg-gray-200 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative w-[50rem] py-3 sm:mx-auto">
        <div className="relative px-4 py-10 bg-gray-100 mx-8 md:mx-0 shadow rounded-md sm:p-10">
          <div className="w-full mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-300 rounded-full flex flex-shrink-0 justify-center items-center text-green-700 text-2xl font-mono">
                $
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Realizar venta</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  Vender productos de la soda.
                </p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Código</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Ejemplo: 1111111"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Nombre</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Ejemplo: Coca Cola"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Precio</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder=""
                    disabled="true"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Cantidad</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Ejemplo: 20"
                  />
                </div>
                <div className="pt-4 flex items-center space-x-4">
                <button className="bg-sky-900 hover:bg-sky-800 flex justify-center items-center w-1/2 m-auto text-white px-4 py-3 rounded-md focus:outline-none">
                  Añadir
                </button>
              </div>
                <div className="bg-gray-300 h-[165px] border-solid rounded-md overflow-auto">
                  <table className="border-collapse w-full overflow-auto">
                    <thead>
                      <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          Código
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          Nombre
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          Precio
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          Cantidad
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          Total
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                            Código
                          </span>
                          1
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                            Nombre
                          </span>
                          Coca Cola 600ml
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                            Precio
                          </span>
                          1000
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                            Cantidad
                          </span>
                          4
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                            Total
                          </span>
                          4000
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                          <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                            Actions
                          </span>
                          <a
                            href="#"
                            className="text-red-500 hover:text-blue-600 underline"
                          >
                            Remover
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                          Código
                        </span>
                        2
                      </td>
                      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                          Nombre
                        </span>
                        Empanada Arreglada
                      </td>
                      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                          Precio
                        </span>
                        1000
                      </td>
                      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                          Cantidad
                        </span>
                        2
                      </td>
                      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                          Total
                        </span>
                        2000
                      </td>
                      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                          Actions
                        </span>
                        <a
                          href="#"
                          className="text-red-500 hover:text-blue-600 underline"
                        >
                          Remover
                        </a>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-right m-3">
                  <p>Total: ₡6000</p>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button className="bg-sky-900 hover:bg-sky-800 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                  Realizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesModule;
