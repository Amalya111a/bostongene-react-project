import React from 'react';
import { Card, Typography } from 'antd';

export interface Clinic {
  id: string;
  name: string;
  category: string;
  address: string;
  phone: string;
  description: string;
  imageUrl: string;
}

interface Props {
  clinic: Clinic;
}

const { Paragraph, Text } = Typography;

const ClinicCard: React.FC<Props> = ({ clinic }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={clinic.name}
          src={clinic.imageUrl}
          style={{
            height: 240,
            width: '100%',
            objectFit: 'cover',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
      }
      style={{
        width: '100%',
        borderRadius: 12,
        boxShadow: '0 6px 20px rgba(20, 83, 45, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'white',
        transition: 'transform 0.3s ease',
      }}
      bodyStyle={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        gap: '10px',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <Typography.Title level={4} style={{ color: '#14532D', marginBottom: 8 }}>
        {clinic.name}
      </Typography.Title>

      <div style={{ fontSize: 14, lineHeight: 1.6 }}>
        <p><Text strong>📍 Address:</Text> {clinic.address}</p>
        <p><Text strong>📞 Phone:</Text> {clinic.phone}</p>
        <p><Text strong>💎 Category:</Text> {clinic.category}</p>
      </div>

      {/* 🟢 Styled Green Description */}
      <div
        style={{
          backgroundColor: '#E6F4EA',
          border: '1px solid #C5E1D1',
          borderLeft: '4px solid #14532D',
          borderRadius: 8,
          padding: '14px 16px',
          marginTop: 10,
          color: '#14532D',
          fontSize: 14,
          lineHeight: 1.6,
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <Paragraph style={{ marginBottom: 0 }}>
          {clinic.description || 'No description available.'}
        </Paragraph>
      </div>
    </Card>
  );
};

export default ClinicCard;
