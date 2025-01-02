import { useEffect, useCallback, useState } from "react";
import Search from "./compontents/Search";
import AddAppointment from "./compontents/AddAppointment";
import AppointmentInfo from "./compontents/AppointmentInfo";

import {BiArchive} from "react-icons/bi"

function App() {

  const [appointmentList, setAppointmentList] = useState([]);

  //fetching data can be done from a local file or a server
  //retrieve the data and asking useCallback to track and changes that happen to that data
  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
      setAppointmentList(data)
    });
  }, []);


// ask usedEffect to track any thing that happens to our fetchData
  useEffect(() => {
    fetchData();
  }, [fetchData])


  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl  pb-3 ">
        <BiArchive  className="inline-block text-red-400 align-top"/> 
        Your Appointments
      </h1>
      <AddAppointment />
      <Search />
      <AppointmentInfo  appointmentList={appointmentList} 
        onDeleteAppointment={appointmentId => setAppointmentList(appointmentList.filter(
          appointment => appointment.id !== appointmentId
        ))}/>

    </div>
  );
}

export default App;
