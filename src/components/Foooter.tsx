import React from 'react';
import { Layout, Space, Typography } from 'antd';
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  LinkedinFilled,
} from '@ant-design/icons';

const { Footer } = Layout;
const { Text, Title } = Typography;

const AppFooter: React.FC = () => {
  return (
    <Footer style={footerStyle}>
      <Title level={4} style={{ color: '#d1f7e1', marginBottom: 7 }}>
        Stay Connected with Skin & Health
      </Title>

      <Text style={{ color: '#a8d5ba', fontSize: 16, marginBottom: 7, display: 'block' }}>
        Your trusted partner in skincare and wellness. We help you look and feel your best every day.
      </Text>

      <Space size="large" align="center" style={{ marginBottom: 7 }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FacebookFilled />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <TwitterSquareFilled />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <InstagramFilled />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <LinkedinFilled />
        </a>
      </Space>

      <Text style={{ color: '#a8d5ba', fontSize: 14 }}>
        <br />
        Contact us:{" "}
        <a
          href="mailto:info@skinhealth.com"
          style={{ color: '#d1f7e1', textDecoration: 'underline' }}
        >
          info@skinhealth.com
        </a>{" "}
        | Phone: +374 77 123456
      </Text>

      <br />

      <Text style={{ color: '#87bda7', fontSize: 12 }}>
        © {new Date().getFullYear()} Skin & Health. All rights reserved.
      </Text>
    </Footer>
  );
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    background:
        'linear-gradient(to right, #003d29, #004d33)',
    padding: '40px 20px',
    userSelect: 'none',

};

const iconStyle: React.CSSProperties = {
  fontSize: 28,
  color: '#b5f0d2',
  transition: 'color 0.3s ease',
  cursor: 'pointer',
};

export default AppFooter;
