export interface Doctor {
    id: string;
    name: string;
    surname: string;
    workplace: string;
    specialty: string;
    photo_url: string;
}
export interface DoctorsResponse {
    data: Doctor[];
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}
export const DOCTOR_API_URL = "https://script.google.com/macros/s/AKfycbzWiJ_kTF0sgNQK64kXBynWRiNBn9Q30zxKeLgXRU-wSo-GPUeGf3gzJbixVrkJz1bAEQ/exec";
export const fetchDoctors = async (
    page: number,
    pageSize: number
): Promise<DoctorsResponse> => {
    const url = `${DOCTOR_API_URL}?page=${page}&pageSize=${pageSize}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch doctors");
    }
    return  response.json() ;

}
