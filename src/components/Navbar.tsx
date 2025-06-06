import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <>
      <Header style={styles.header}>
        <div style={styles.leftSection}>
          <Menu
            mode="horizontal"
            style={styles.menu}
            selectable={false}
            overflowedIndicator={<span style={{ fontSize: 18 }}>⋮</span>}
          >
            {['Home', 'Doctors', 'Conditions', 'Clinics', 'Products', 'Appointment'].map((text, i) => (
              <Menu.Item key={i} style={styles.menuItem}>
                <Link to={`/${text.toLowerCase()}`} style={styles.link}>
                  {text}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
        <div style={styles.rightSection}>
          <Link to="/login">
            <Button
              type="primary"
              icon={<LoginOutlined />}
              style={styles.loginButton}
            >
              Login
            </Button>
          </Link>
        </div>
      </Header>

      {/* Inline style override */}
      <style>{`
        .ant-menu-horizontal > .ant-menu-item > a {
          color: #014421 !important;
          border-bottom: 2px solid transparent;
          padding-bottom: 4px;
          transition: border-color 0.3s ease;
        }

        .ant-menu-horizontal > .ant-menu-item:hover > a {
          border-bottom-color: #016936 !important;
        }

        .ant-menu-horizontal > .ant-menu-item-selected > a {
          border-bottom-color: #019149 !important;
        }
      `}</style>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(to right, rgba(1, 68, 33, 0.8), rgba(1, 105, 54, 0.85))',
    padding: '0 30px',
    height: 75,
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    zIndex: 5,
    position: 'sticky',
    top: 0,
    borderRadius: 0,
    margin: 0,
  },
  leftSection: {
    flex: 1,
  },
  menu: {
    backgroundColor: 'transparent',
    borderBottom: 'none',
    display: 'flex',
    gap: '12px',
  },
  menuItem: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    padding: '0 16px',
    transition: 'all 0.3s ease',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: 16,
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#016936',
    borderColor: '#014421',
    color: '#fff',
    fontWeight: 600,
    borderRadius: 20,
    padding: '0 20px',
    height: 40,
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
};

export default Navbar;
