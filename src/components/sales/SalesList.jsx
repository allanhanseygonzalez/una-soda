import React from 'react'
import { sales } from '../../data/sales'

function SalesList() {

  const salesJson = sales;

  return (
    
    <div className="flex flex-col mb-12 w-full">
      <div className="-my-2 overflow-x-auto overflow-y-auto">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between px-20 py-2">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl mb-6 leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Lista de ventas
              </h2>
            </div>
          </div>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Número de venta
                  </th>
                  <th
                    scope="col"
                    className="px-9 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Fecha
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Vendedor
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Método de pago
                  </th>
                  <th
                    scope="col"
                    className="px-7 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total
                  </th>
                  
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {salesJson.map((sale) => (
                  <tr key={sale.id}>
                    <td className="px-10 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{sale.id}</div>
                    </td>
                  
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {sale.fecha}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {sale.vendedor}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {sale.metodo_pago}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {sale.total}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesList;