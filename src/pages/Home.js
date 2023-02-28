import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { doctorData, appointmentData } from "../utils/data";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [appointment, setAppointment] = useState(appointmentData);

  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors
        doctors={doctors}
        appointment={appointment}
        setAppointment={setAppointment}
      />
      <AppointmentList
        appointment={appointment}
        setAppointment={setAppointment}
      />
    </main>
  );
};

export default Home;
