export interface Doctor {
    id: string;
    name: string;
    surname: string;
    workplace: string;
    specialty: string;
    photo_url: string;
    averageRating: number;
    ratingCount: number;

}
export interface DoctorsResponse {
    data: Doctor[];
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}
export const DOCTOR_API_URL = "https://script.google.com/macros/s/AKfycbxnTqlQzD0Er95GIK_-LE3_iysB32HQs_iku-Co2RtEAOr_XQObUT3VLYBJgexdrD-q/exec";
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
