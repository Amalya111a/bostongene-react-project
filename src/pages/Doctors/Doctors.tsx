import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    Spin,
    Alert,
    List,
    Avatar,
    Typography,
    Button,
    Drawer,
    Pagination,
    Input,
    Rate,
} from "antd";
import { fetchDoctorsThunk } from "../../features/doctors/doctorsAPI";
import type { RootState, AppDispatch } from "../../app/store";
import type { Doctor} from "../../services/doctorService";
import {DOCTOR_API_URL} from "../../services/doctorService";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
// ... imports remain unchanged

const Doctors = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
    const { doctors, loading, error, total } = useSelector((state: RootState) => state.doctors);

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const pageSize = 10;

    const [userRating, setUserRating] = useState<number>(0);
    const [submittingRating, setSubmittingRating] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchDoctorsThunk({ page, pageSize }));
    }, [dispatch, page]);

    const handleSelectDoctor = (doctor: Doctor) => {
        setSelectedDoctor(doctor);
        setUserRating(0);
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
        setSelectedDoctor(null);
        setUserRating(0);
    };

    const onPageChange = (page: number) => {
        setPage(page);
    };

    const submitRating = async (doctorId: string) => {
        if (userRating === 0) {
            alert("Please select a rating before submitting");
            return;
        }

        setSubmittingRating(true);

        try {
            const response = await fetch(`${DOCTOR_API_URL}?action=rateDoctor`, {
                method: "POST",
                body: JSON.stringify({ doctorId, rating: userRating }),
            });

            const data = await response.json();

            if (data.success) {
                alert("Rating submitted!");
                dispatch(fetchDoctorsThunk({ page, pageSize }));
                closeDrawer();
            } else {
                alert("Failed to submit rating: " + data.message);
            }
        } catch (error) {
            alert("Network error submitting rating");
            console.log(error);
        } finally {
            setSubmittingRating(false);
        }
    };


    const filteredDoctors = doctors.filter((doctor) =>
        `${doctor.name} ${doctor.surname} ${doctor.specialty} ${doctor.workplace}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    if (loading)
        return (
            <Spin
                tip="Loading doctors..."
                style={{ marginTop: 50, textAlign: "center", width: "100%" }}
            />
        );

    if (error)
        return (
            <Alert message="Error" description={error} type="error" showIcon />
        );

    return (
        <div
            style={{
                position: "relative",
                maxWidth: 700,
                margin: "40px auto",
                padding: 20,
                minHeight: "100vh",
                borderRadius: 8,
                overflow: "hidden",
                color: "#fff",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1588776814546-ec7e1c8c638c?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.6)",
                    zIndex: 0,
                    borderRadius: 8,
                }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Title level={2} style={{ color: "#fff" }}>Doctors</Title>
                </div>

                <Input
                    placeholder="Search doctors by name, specialty, or workplace"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginBottom: 20 }}
                />

                <List
                    grid={{ gutter:16, column: 4, }}
                    dataSource={filteredDoctors}
                    renderItem={(doctor) => (
                        <List.Item key={doctor.id}>
                            <div
                                onClick={() => handleSelectDoctor(doctor)}
                                style={{
                                    cursor: "pointer",
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                    padding: 16,
                                    borderRadius: 8,
                                    height: "350px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    color: "#fff",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                                    transition: "background-color 0.3s ease",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")
                                }
                            >
                                <Avatar
                                    size={150}
                                    src={doctor.photo_url || undefined}
                                    style={{ marginBottom: 12 }}
                                >
                                    {!doctor.photo_url && doctor.name[0].toUpperCase()}
                                </Avatar>
                                <Text strong style={{ fontSize: 16 }}>
                                    {doctor.name} {doctor.surname}
                                </Text>
                                <Text>{doctor.specialty}</Text>
                                <Text type="secondary" style={{ fontSize: 12 }}>
                                    {doctor.workplace}
                                </Text>

                                <Rate
                                    allowHalf
                                    disabled
                                    defaultValue={doctor.averageRating || 0}
                                    style={{ marginTop: 8 }}
                                />
                                <Text style={{ fontSize: 12 }}>
                                    {doctor.ratingCount
                                        ? `(${doctor.ratingCount} rating${doctor.ratingCount > 1 ? "s" : ""})`
                                        : "(No ratings yet)"}
                                </Text>
                            </div>
                        </List.Item>
                    )}
                />

                <Pagination
                    current={page}
                    pageSize={pageSize}
                    total={total}
                    onChange={onPageChange}
                    style={{ marginTop: 24, justifyContent: "center" }}
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
                            <Avatar
                                size={100}
                                src={selectedDoctor.photo_url || undefined}
                                style={{ marginBottom: 16 }}
                            >
                                {!selectedDoctor.photo_url && selectedDoctor.name[0].toUpperCase()}
                            </Avatar>
                            <p><Text strong>Specialty: </Text>{selectedDoctor.specialty}</p>
                            <p><Text strong>Workplace: </Text>{selectedDoctor.workplace}</p>
                            <p><Text strong>Gender:</Text>{selectedDoctor.gender}</p>
                            <p><Text strong>Available days: </Text>{selectedDoctor.availableDays}</p>

                            <Rate
                                allowHalf
                                disabled
                                defaultValue={selectedDoctor.averageRating || 0}
                                style={{ marginBottom: 12 }}
                            />
                            <Text style={{ fontSize: 12, display: "block", marginBottom: 16 }}>
                                {selectedDoctor.ratingCount
                                    ? `(${selectedDoctor.ratingCount} rating${selectedDoctor.ratingCount > 1 ? "s" : ""})`
                                    : "(No ratings yet)"}
                            </Text>

                            {isAuthenticated ? (
                                <>
                                    <Text strong>Your Rating:</Text>
                                    <Rate
                                        allowHalf
                                        value={userRating}
                                        onChange={setUserRating}
                                        style={{ marginBottom: 12 }}
                                    />
                                    <Button
                                        type="primary"
                                        loading={submittingRating}
                                        onClick={() => submitRating(selectedDoctor.id)}
                                        disabled={userRating === 0 || submittingRating}
                                        block
                                    >
                                        Submit Rating
                                    </Button>

                                    <Button
                                        style={{ marginTop: 12 }}
                                        onClick={() =>
                                            navigate("/appointmentPage", {
                                                state: { doctor: selectedDoctor },
                                            })
                                        }
                                        type="primary"
                                    >
                                        Book Appointment
                                    </Button>
                                </>
                            ) : (
                                <Button onClick={() => navigate("/login")} type="primary" danger>
                                    Login to Book Appointment & Rate
                                </Button>
                            )}
                        </>
                    )}
                </Drawer>
            </div>
        </div>
    );
};

export default Doctors;
