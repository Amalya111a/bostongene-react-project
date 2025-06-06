export interface Doctor {
  name: string;
  photoUrl: string;
  specialty: string;
  bio: string;
}

export const bestDoctors: Doctor[] = [
  {
    name: "Dr. Annie Doe",
    photoUrl: "/images/doctors/Annie.jpg",
    specialty: "Dermatology Specialist",
    bio: "Expert in skin treatments and personalized skincare plans.",
  },
  {
    name: "Dr. Mary Smith",
    photoUrl: "/images/doctors/Mary.jpg",
    specialty: "Cosmetic Surgeon",
    bio: "Specializes in minimally invasive cosmetic procedures.",
  },
  {
    name: "Dr. Jhon Walker",
    photoUrl: "/images/doctors/Jhon.jpg",
    specialty: "Pediatric Dermatology",
    bio: "Dedicated to treating skin conditions in children.",
  },
  {
    name: "Dr. Silvie Lee",
    photoUrl: "/images/doctors/Silvie.jpg",
    specialty: "Clinical Researcher",
    bio: "Focused on developing advanced skincare therapies.",
  },
];
