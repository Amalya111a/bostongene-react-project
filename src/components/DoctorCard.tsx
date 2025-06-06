import React from 'react';

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialty, image }) => {
  return (
    <div className="bg-green-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h3 className="text-lg font-bold text-green-900">{name}</h3>
      <p className="text-sm text-green-700">{specialty}</p>
    </div>
  );
};

export default DoctorCard;
