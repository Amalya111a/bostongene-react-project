// src/pages/AppointmentsPage.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, List, Card, Descriptions, Empty,Alert,Spin, } from 'antd';
import moment from 'moment';


import { CalendarOutlined, ClockCircleOutlined, PhoneOutlined, FileTextOutlined, UserOutlined } from '@ant-design/icons';
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

    // @ts-ignore
    return (
        <div style={{ maxWidth: 800, margin: '40px auto', padding: 24 }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>
                Your Appointments
            </Title>

            {userAppointments?.length === 0 ? (
                <Empty description="No appointments found" />
            ) : (
                <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={userAppointments}
                    renderItem={(item) => (
                        <List.Item>
                            <Card
                                key={`${item.date}-${item.time}-${item.doctorName}`}

                                hoverable
                                style={{ borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                                title={
                                    <Text strong>
                                        <UserOutlined style={{ marginRight: 8 }} />
                                        Dr. {item.doctorName}
                                    </Text>
                                }
                            >
                                <Descriptions column={1} size="small">
                                    <Descriptions.Item label={<span><CalendarOutlined /> Date</span>}>
                                        {new Date(item.date).toLocaleDateString()}
                                    </Descriptions.Item>
                                    <Descriptions.Item label={<span><ClockCircleOutlined /> Time</span>}>
                                        {moment(item.time).format('hh:mm A')}
                                    </Descriptions.Item>
                                    {item.phoneNumber && (
                                        <Descriptions.Item label={<span><PhoneOutlined /> Phone</span>}>
                                            {item.phoneNumber}
                                        </Descriptions.Item>
                                    )}
                                    {item.notes && (
                                        <Descriptions.Item label={<span><FileTextOutlined /> Notes</span>}>
                                            {item.notes}
                                        </Descriptions.Item>
                                    )}
                                </Descriptions>

                            </Card>
                        </List.Item>
                    )}
                />
            )}
        </div>
    );
};

export default AppointmentsPage;
