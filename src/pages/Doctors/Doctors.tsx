import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Alert, List, Avatar, Typography, Button, Drawer, Pagination } from "antd";
import { fetchDoctorsThunk } from "../../features/doctors/doctorsAPI";
import type { RootState, AppDispatch } from "../../app/store";
import type { Doctor } from "../../services/doctorService";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Doctors = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { doctors, loading, error, total } = useSelector((state: RootState) => state.doctors);
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const pageSize = 10;

    useEffect(() => {
        dispatch(fetchDoctorsThunk({ page, pageSize }));
    }, [dispatch, page]);

    const handleSelectDoctor = (doctor: Doctor) => {
        setSelectedDoctor(doctor);
        setDrawerVisible(true);
    };
    const closeDrawer = () => {
        setDrawerVisible(false);
        setSelectedDoctor(null);
    };

    const onPageChange = (page: number) => {
        setPage(page);
    };

    if (loading) return <Spin tip="Loading doctors..." style={{ marginTop: 50, textAlign: 'center', width: '100%' }} />;
    if (error) return <Alert message="Error" description={error} type="error" showIcon />;

    return (
        <div
            style={{
                position: 'relative',
                maxWidth: 700,
                margin: '40px auto',
                padding: 20,
                minHeight: '100vh',
                borderRadius: 8,
                overflow: 'hidden',
                color: '#fff',
            }}
        >
            {/* Background image overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1588776814546-ec7e1c8c638c?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.6)',
                    zIndex: 0,
                    borderRadius: 8,
                }}
            />

            {/* Content container */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Title level={2} style={{ color: '#fff' }}>Doctors</Title>
                    <Button onClick={() => dispatch(fetchDoctorsThunk({ page, pageSize }))} type="primary">
                        Refresh
                    </Button>
                </div>

                <List
                    grid={{ gutter: 16, column: 2 }}
                    dataSource={doctors}
                    renderItem={(doctor) => (
                        <List.Item key={doctor.id}>
                            <div
                                onClick={() => handleSelectDoctor(doctor)}
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    padding: 16,
                                    borderRadius: 8,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    color: '#fff',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                    transition: 'background-color 0.3s ease',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')}
                                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                            >
                                <Avatar size={64} src={doctor.photo_url || undefined} style={{ marginBottom: 12 }}>
                                    {!doctor.photo_url && doctor.name[0].toUpperCase()}
                                </Avatar>
                                <Text strong style={{ fontSize: 16 }}>{doctor.name} {doctor.surname}</Text>
                                <Text>{doctor.specialty}</Text>
                                <Text type="secondary" style={{ fontSize: 12 }}>{doctor.workplace}</Text>
                            </div>
                        </List.Item>
                    )}
                />

                <Pagination
                    current={page}
                    pageSize={pageSize}
                    total={total}
                    onChange={onPageChange}
                    style={{ marginTop: 24, textAlign: 'center' }}
                    showSizeChanger={false}
                />

                <Drawer
                    title={selectedDoctor ? `${selectedDoctor.name} ${selectedDoctor.surname}` : ""}
                    placement="right"
                    width={400}
                    onClose={closeDrawer}
                    open={drawerVisible}
                >
                    {selectedDoctor && (
                        <>
                            <Avatar size={100} src={selectedDoctor.photo_url || undefined} style={{ marginBottom: 16 }}>
                                {!selectedDoctor.photo_url && selectedDoctor.name[0].toUpperCase()}
                            </Avatar>
                            <p><Text strong>Specialty: </Text>{selectedDoctor.specialty}</p>
                            <p><Text strong>Workplace: </Text>{selectedDoctor.workplace}</p>
                            <Button onClick={() => navigate("/appointment", { state: { doctor: selectedDoctor } })} type="primary">
                                Book Appointment
                            </Button>
                        </>
                    )}
                </Drawer>
            </div>
        </div>
    );
};

export default Doctors;
