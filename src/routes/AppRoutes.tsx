// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Doctors from '../pages/Doctors/Doctors';
import Appointment from '../pages/Appointment/Appointment';
import Products from '../pages/Products/Products';
import Conditions from '../pages/Conditions/Conditions';
import Clinics from '../pages/Clinics/Clinics';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import AppointmentsPage from "../pages/Appointment/AppointmentsPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />  {/* add this */}
    <Route path="/doctors" element={<Doctors />} />
    <Route path="/appointment" element={<AppointmentsPage />} />
      <Route path="/appointmentPage" element={<Appointment/>}/>
    <Route path="/Products" element={<Products />} />
    <Route path="/Conditions" element={<Conditions />} />
    <Route path="/Clinics" element={<Clinics />} />
    <Route path="/Registration" element={<Registration />} />
    <Route path="/Login" element={<Login />} />
  </Routes>
);


export default AppRoutes;
