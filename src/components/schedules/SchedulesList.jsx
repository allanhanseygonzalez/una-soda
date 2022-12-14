import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoPencil } from "react-icons/io5";
import { schedules } from "../../data/schedules";

function ScheduleList() {

  const schedulesJson = schedules;

  return (
    <div className="flex flex-col mb-12 w-full">
      <div className="-my-2 overflow-x-auto overflow-y-auto">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between px-20 py-2">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl mb-6 leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Gestión de Horarios
              </h2>
            </div>
         
          </div>
          <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-9 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Día
                  </th>
                  <th
                    scope="col"
                    className="px-14 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                    <td className="px-6 py-1 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            <input type="text" value={schedule.horario} className="p-5 w-[500px]"></input>
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

export default ScheduleList;
