import {BiTrash} from "react-icons/bi"

import React from 'react'

const AppointmentInfo = ({appointmentList}) => {
  return (
    <div>
        <ul className="divide-y divide-gray-200">
        {appointmentList.map(appoinntment => (
          <li className="px-3 py-3 flex items-start">
            <button type="button"
              className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <BiTrash />
            </button>
            <div className="flex-grow">
              <div className="flex items-center">
                <span className="flex-none font-medium text-2xl text-blue-500">{appoinntment.petName}</span>
                <span className="flex-grow text-right">{appoinntment.aptDate}</span>
              </div>
              <div className="font-bold text-blue-500">Owner: {appoinntment.owverName}</div>
              <div className="leading-tight">{appoinntment.aptNotes}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppointmentInfo