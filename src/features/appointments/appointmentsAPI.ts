import {DOCTOR_API_URL} from "../../services/doctorService";
export const getAppointments = async () => {
    const res = await fetch(`${DOCTOR_API_URL}?action=getAppointments`);
    const data = await res.json();
    console.log(data);
    return data.appointments;
};
  