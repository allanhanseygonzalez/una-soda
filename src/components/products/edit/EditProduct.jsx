import React from "react";

function EditProduct() {
  return (
    <div className="min-h-screen w-full bg-gray-200 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-md sm:mx-auto">
        <div className="relative px-4 py-10 bg-gray-100 mx-8 md:mx-0 shadow rounded-md sm:p-10">
          <div className="w-full mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                P
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Editar un Producto</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  Edita la información un producto del inventario de la soda.
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
                    value="1111111"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Nombre</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    value="Coca Cola"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Precio</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    value="1200"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Cantidad en Inventario</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    value="20"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Tipo</label>
                  <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue="BE">
                    <option selected="BE">Bebida</option>
                    <option value="IN">Ingrediente</option>
                    <option value="SN">Snack</option>
                    <option value="RE">Repostería</option>
                    <option value="PO">Postre</option>
                    <option value="HE">Helado</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <button className="bg-sky-900 hover:bg-sky-800 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
