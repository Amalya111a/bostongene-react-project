import {DOCTOR_API_URL} from "./doctorService";
export interface AppointmentService {
    doctorId: string;
    doctorName: string;
    patientEmail: string | null;
    phoneNumber: string;
    date: string;
    time: string;
    notes: string | null | undefined;
}
export const submitAppointment = async (payload: AppointmentService): Promise<void> => {
    const response = await fetch(DOCTOR_API_URL,{
        method: "POST",
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error("Failed to submit Appointment");
    }
};