import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { fetchClinics } from '../../features/clinics/clinicSlice';
import { Typography, Row, Col, Spin, Alert } from 'antd';
import ClinicCard from '../../components/Cliniccard';
import './Clinics.css';

const { Title } = Typography;

const Clinics: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: clinics, loading, error } = useSelector((state: RootState) => state.clinics);

  useEffect(() => {
    dispatch(fetchClinics());
  }, [dispatch]);

  if (loading) return <div className="loading-container"><Spin size="large" tip="Loading clinics..." /></div>;
  if (error) return <Alert type="error" message="Error" description={error} />;

  return (
    <div className="clinics-container">
      <Title className="clinics-title" level={1}>
        Our Clinics
      </Title>

      <Row gutter={[24, 24]}>
        {clinics.map((clinic) => (
          <Col key={clinic.id} xs={24} sm={12} md={8} lg={6}>
            <ClinicCard clinic={clinic} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Clinics;
