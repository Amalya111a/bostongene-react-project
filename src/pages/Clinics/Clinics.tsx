// src/pages/Clinics.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { fetchClinics } from '../../features/clinics/clinicSlice';
import { Typography, Row, Col, Spin, Alert, Button, Input } from 'antd';
import ClinicCard from '../../components/Cliniccard';
import './Clinics.css';

const { Title } = Typography;

const categories = ['All', 'Skin', 'Laser', 'Dental'];

const Clinics: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: clinics, loading, error } = useSelector((state: RootState) => state.clinics);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchClinics());
  }, [dispatch]);

const filteredClinics = clinics.filter((clinic) => {
  const matchCategory = selectedCategory === 'All' || (clinic.category && clinic.category === selectedCategory);
  const matchSearch = clinic.name.toLowerCase().includes(searchTerm.toLowerCase());
  return matchCategory && matchSearch;
});


  if (loading)
    return <div className="loading-container"><Spin size="large" tip="Loading clinics..." /></div>;
  if (error) return <Alert type="error" message="Error" description={error} />;

  return (
    <div className="clinics-container">
      <div className="clinics-hero">
        <h1 className="clinics-hero-title">Բարի գալուստ Մեր Էսթետիկ Կենտրոններ</h1>
        <p className="clinics-hero-subtitle">Բացահայտեք լավագույն կլինիկաները Հայաստանում՝ վստահությամբ և ոճով:</p>
      </div>

      <div className="clinics-controls">
        <Input
          className="search-input"
          placeholder="Որոնել կլինիկա..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="category-buttons">
          {categories.map((cat) => (
            <Button
              key={cat}
              type={selectedCategory === cat ? 'primary' : 'default'}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <Row gutter={[24, 24]}>
        {filteredClinics.map((clinic) => (
          <Col key={clinic.id} xs={24} sm={12} md={8} lg={6}>
              <ClinicCard clinic={clinic} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Clinics;
