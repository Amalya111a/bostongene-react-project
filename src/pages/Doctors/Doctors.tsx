import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

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
import type { Doctor } from "../../services/doctorService";
import { DOCTOR_API_URL } from "../../services/doctorService";

import "./Doctors.css";

const { Title, Text } = Typography;

const Doctors = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { doctors, loading, error } = useSelector(
    (state: RootState) => state.doctors
  );

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;

  const [userRating, setUserRating] = useState<number>(0);
  const [submittingRating, setSubmittingRating] = useState<boolean>(false);

  // Get specialty filter from URL query param
  const query = new URLSearchParams(location.search);
  const specialtyFilter = query.get("specialty") || "";

  // Fetch ALL doctors on mount (fetch page=1, pageSize very large)
  useEffect(() => {
    dispatch(fetchDoctorsThunk({ page: 1, pageSize: 1000 }));
  }, [dispatch]);

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
        dispatch(fetchDoctorsThunk({ page: 1, pageSize: 1000 }));
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

  // Client-side filtering by specialty and searchTerm
// Filtering doctors by searchTerm and specialty
const filteredDoctors = doctors.filter((doctor) => {
  const combined = `${doctor.name} ${doctor.surname} ${doctor.specialty} ${doctor.workplace}`.toLowerCase();
  const matchesSearch = combined.includes(searchTerm.toLowerCase());
  const matchesSpecialty = specialtyFilter
    ? doctor.specialty.toLowerCase().includes(specialtyFilter.toLowerCase())
    : true;

  return matchesSearch && matchesSpecialty;
});

// Pagination: slice filteredDoctors by current page and pageSize
const totalFiltered = filteredDoctors.length;
const startIndex = (page - 1) * pageSize;
const pagedDoctors = filteredDoctors.slice(startIndex, startIndex + pageSize);

useEffect(() => {
  setPage(1);
}, [specialtyFilter]);

  if (loading)
    return (
      <Spin
        tip="Loading doctors..."
        style={{ marginTop: 50, textAlign: "center", width: "100%" }}
      />
    );

  if (error)
    return <Alert message="Error" description={error} type="error" showIcon />;

  return (
    <div className="doctors-page">
      <div className="content">
        <Title level={2} style={{ color: "#d1e7c2", marginBottom: 20 }}>
          Doctors
        </Title>

        <Input
          placeholder="Search doctors by name, specialty, or workplace"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1); // Reset to first page on new search
          }}
          allowClear
          className="search-input"
        />

        {/* Show specialty filter message with clear filter button */}
        {specialtyFilter && (
          <div style={{ marginTop: 12, marginBottom: 16, color: "#d1e7c2" }}>
            Filtering by specialty: <strong>{specialtyFilter}</strong>{" "}
            <Button
              size="small"
              onClick={() => {
                navigate("/doctors");
                setPage(1);
              }}
              style={{ marginLeft: 8 }}
            >
              Clear Filter
            </Button>
          </div>
        )}

        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={pagedDoctors}
          renderItem={(doctor) => (
            <List.Item key={doctor.id}>
              <div
                onClick={() => handleSelectDoctor(doctor)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  padding: 16,
                  borderRadius: 8,
                  height: "100%",
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
                  style={{ marginTop: 8, color: "#a6d785" }}
                />
                <Text style={{ fontSize: 12 }}>
                  {doctor.ratingCount
                    ? `(${doctor.ratingCount} rating${
                        doctor.ratingCount > 1 ? "s" : ""
                      })`
                    : "(No ratings yet)"}
                </Text>
              </div>
            </List.Item>
          )}
        />

        <Pagination
          current={page}
          pageSize={pageSize}
          total={totalFiltered}
          onChange={onPageChange}
          style={{ marginTop: 24, justifyContent: "center" }}
          showSizeChanger={false}
          showQuickJumper
        />

        <Drawer
          className="doctor-drawer"
          title={
            selectedDoctor ? `${selectedDoctor.name} ${selectedDoctor.surname}` : ""
          }
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
              <p>
                <Text strong>Specialty: </Text>
                {selectedDoctor.specialty}
              </p>
              <p>
                <Text strong>Workplace: </Text>
                {selectedDoctor.workplace}
              </p>
              <p>
                <Text strong>Gender:</Text> {selectedDoctor.gender}
              </p>
              <p>
                <Text strong>Available days: </Text>
                {selectedDoctor.availableDays}
              </p>

              <Rate
                allowHalf
                disabled
                defaultValue={selectedDoctor.averageRating || 0}
                style={{ marginBottom: 12, color: "#a6d785" }}
              />
              <Text style={{ fontSize: 12, display: "block", marginBottom: 16 }}>
                {selectedDoctor.ratingCount
                  ? `(${selectedDoctor.ratingCount} rating${
                      selectedDoctor.ratingCount > 1 ? "s" : ""
                    })`
                  : "(No ratings yet)"}
              </Text>

              {isAuthenticated ? (
                <>
                  <Text strong>Your Rating:</Text>
                  <Rate
                    allowHalf
                    value={userRating}
                    onChange={setUserRating}
                    style={{ marginBottom: 16 }}
                  />
                  <Button
                    type="primary"
                    onClick={() => submitRating(selectedDoctor.id)}
                    loading={submittingRating}
                    disabled={userRating === 0}
                    block
                  >
                    Submit Rating
                  </Button>
                </>
              ) : (
                <Alert
                  message="You must be logged in to rate doctors."
                  type="info"
                  showIcon
                />
              )}
            </>
          )}
        </Drawer>
      </div>
    </div>
  );
};

export default Doctors;
