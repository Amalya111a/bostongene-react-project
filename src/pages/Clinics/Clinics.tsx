import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Spin, Alert, Button, Input } from 'antd';
import Papa from 'papaparse';
import ClinicCard from './ClinicCard';
import './Clinics.css';
import { Clinic } from './ClinicCard';

const { Title, Paragraph } = Typography;

const categories = ['All', 'Skin', 'Laser'];

const SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vT53CBkwjsN_ZWRBIZQfIjNh5LtfxXxTqO08QxUN1nAlwcZdKQcszP5bxvPDJgeOs-kJgNHyJ-dZAcH/pub?output=csv';

const Clinics: React.FC = () => {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(null);

    Papa.parse<Clinic>(SHEET_CSV_URL, {
      download: true,
      header: true,
      complete: (results: Papa.ParseResult<Clinic>) => {
        setClinics(results.data);
        setLoading(false);
      },
      error: () => {
        setError('Failed to load clinic data.');
        setLoading(false);
      },
    });
  }, []);

  const filteredClinics = clinics.filter((clinic) => {
    const search = searchTerm.toLowerCase();
    const matchCategory =
      selectedCategory === 'All' || clinic.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchSearch =
      clinic.name.toLowerCase().includes(search) ||
      clinic.address.toLowerCase().includes(search);
    return matchCategory && matchSearch;
  });

  if (loading)
    return (
      <div className="loading-container">
        <Spin size="large" tip="Loading clinics..." />
      </div>
    );

  if (error)
    return (
      <Alert
        type="error"
        message="Error"
        description={error}
        style={{ margin: '20px' }}
      />
    );

  return (
    <div className="clinics-container">
      <div className="clinics-hero">
        <Title className="clinics-hero-title">Clinics We Collaborate With</Title>
        <Paragraph className="clinics-hero-subtitle">
          Discover top-rated clinics in dermatology and laser aesthetics.
        </Paragraph>
      </div>

      <div className="clinics-controls">
        <Input
          className="search-input"
          placeholder="Search by name or address..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          allowClear
        />
        <div className="category-buttons">
          {categories.map((cat) => (
            <Button
              key={cat}
              type={selectedCategory === cat ? 'primary' : 'default'}
              onClick={() => setSelectedCategory(cat)}
              style={{
                marginRight: 10,
                borderRadius: 8,
                backgroundColor: selectedCategory === cat ? '#14532D' : undefined,
                borderColor: selectedCategory === cat ? '#14532D' : undefined,
                color: selectedCategory === cat ? '#fff' : undefined,
                fontWeight: selectedCategory === cat ? '600' : 'normal',
              }}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <Row gutter={[32, 32]}>
        {filteredClinics.length > 0 ? (
          filteredClinics.map((clinic) => (
            <Col key={clinic.id} xs={24} sm={24} md={12} lg={8} xl={6}>
              <ClinicCard clinic={clinic} />
            </Col>
          ))
        ) : (
          <Col span={24}>
            <Alert
              message="No clinics found"
              type="info"
              showIcon
              style={{ marginTop: 20 }}
            />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Clinics;
