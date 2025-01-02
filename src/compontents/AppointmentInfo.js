import {BiTrash} from "react-icons/bi"

import React from 'react'

const AppointmentInfo = ({appointmentList, onDeleteAppointment}) => {
  return (
    <div>
        <ul className="divide-y divide-gray-200">
        {appointmentList.map(appointment => (
          <li key={appointment.id}
            className="px-3 py-3 flex items-start">
            <button type="button"
              onClick={() => onDeleteAppointment(appointment.id)}
              className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <BiTrash />
            </button>
            <div className="flex-grow">
              <div className="flex items-center">
                <span className="flex-none font-medium text-2xl text-blue-500">{appointment.petName}</span>
                <span className="flex-grow text-right">{appointment.aptDate}</span>
              </div>
              <div className="font-bold text-black-500">Owner: {appointment.ownerName}</div>
              <div className="leading-tight">{appointment.aptNotes}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppointmentInfo