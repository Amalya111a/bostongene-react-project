// src/services/appointmentService.ts
import {DOCTOR_API_URL} from "./doctorService";
import type {Appointment} from "../features/appointments/appointmentsSlice";


export const submitAppointment = async (payload: Appointment): Promise<void> => {
  const response = await fetch(DOCTOR_API_URL,{
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to submit Appointment");
  }
};

