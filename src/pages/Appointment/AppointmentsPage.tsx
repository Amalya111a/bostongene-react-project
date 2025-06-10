// src/pages/AppointmentsPage.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Typography, Spin, Alert, List } from 'antd';
import { RootState, AppDispatch } from '../../app/store';
import { fetchAppointmentsThunk } from '../../features/appointments/appointmentsSlice'

const { Title, Text } = Typography;

const AppointmentsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { isAuthenticated,user } = useSelector((state: RootState) => state.auth);
    const { appointments, loading, error } = useSelector((state: RootState) => state.appointments);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(fetchAppointmentsThunk());
        }
    }, [dispatch, isAuthenticated]);

    if (!isAuthenticated) {
        return <Alert message="Please log in to view your appointments." type="warning" showIcon />;
    }

    if (loading) {
        return <Spin tip="Loading your appointments..." style={{ display: 'block', marginTop: 50 }} />;
    }

    if (error) {
        return <Alert message="Error" description={error} type="error" showIcon />;
    }

    const userAppointments = appointments.filter(app => app.patientEmail === user!.email);

    return (
        <div style={{ maxWidth: 700, margin: '40px auto', padding: 20 }}>
            <Title level={2}>Your Appointments</Title>

            {userAppointments.length === 0 ? (
                <Text>No appointments found.</Text>
            ) : (
                <List
                    itemLayout="vertical"
                    dataSource={userAppointments}
                    renderItem={(item) => (
                        <Card key={`${item.date}-${item.time}`} style={{ marginBottom: 16 }}>
                            <Text strong>Doctor:</Text> {item.doctorName} <br />
                            <Text strong>Date:</Text> {item.date} <br />
                            <Text strong>Time:</Text> {item.time} <br />
                            <Text strong>Phone:</Text> {item.phoneNumber}<br/>
                            <Text strong>Notes:</Text> {item.notes}
                        </Card>
                    )}
                />
            )}
        </div>
    );
};

export default AppointmentsPage;
