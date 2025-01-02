import {BiArchive} from "react-icons/bi"
import Search from "./compontents/Search";
import AddAppointment from "./compontents/AddAppointment";
import AppointmentInfo from "./compontents/AppointmentInfo";
import appointmentList from "./data.json"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <BiArchive  className="inline-block text-red-400 align-top"/> 
        Your Appointments
      </h1>
      <AddAppointment />
      <Search />
      <AppointmentInfo  appointmentList={appointmentList}/>

    </div>
  );
}

export default App;
