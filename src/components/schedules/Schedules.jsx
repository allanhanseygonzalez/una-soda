import React, { useState, useEffect } from "react";
import {schedules} from "../../data/schedules";

function Schedules() {
 
    const schedulesJson = schedules;

  return (
    <div className="flex mb-10 w-auto  px-72 ">
      <div className="-my-1 overflow-x-auto overflow-y-auto ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-12 ">
          <div className="lg:flex lg:items-center lg:justify-between px-20 py-2 ">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl mb-6 leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Lista de horarios de la soda
              </h2>
            </div>
           </div>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className=" min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-12 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Dia
                  </th>
                  <th
                    scope="col"
                    className="px-16 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Horario
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {schedulesJson.map((schedule) => (
                  <tr key={schedule.id}>
                    <td className="px-10 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{schedule.dia}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            <span> {schedule.horario}</span> 
                          </div>
                        </div>
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

export default Schedules;
