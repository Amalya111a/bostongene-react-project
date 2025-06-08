// src/components/Navbar.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for logout redirect
import { Button, Layout, Menu, message } from 'antd'; // Import 'message' for notifications
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'; // Import LogoutOutlined

// --- REDUX IMPORTS ---
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store'; // Adjust path to your store
import { userLoggedOut } from '../features/auth/authSlice'; // Adjust path to your authSlice
// --- FIREBASE IMPORTS ---
import { auth } from '../firebase'; // Import auth instance for signOut
import { signOut } from 'firebase/auth'; // Import signOut function

const { Header } = Layout;

const Navbar: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const dispatch = useDispatch(); // Initialize useDispatch

  // ***** THIS IS THE "EASY ACCESS" PART *****
  // Get the isAuthenticated status directly from your Redux store
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  // *****************************************

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      message.success("Logged out successfully!");
      dispatch(userLoggedOut()); // Update Redux state to logged out
      navigate("/login"); // Redirect after logout
    } catch (error: any) {
      console.error("Logout failed:", error);
      message.error("Logout failed: " + error.message);
    }
  };

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
          {isAuthenticated ? (
            // If isAuthenticated is true, show Sign Out button
            <Link to="/Home">
            <Button
              type="primary"
              icon={<LogoutOutlined />} // Use LogoutOutlined icon
              style={styles.loginButton}
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
            </Link>
          ) : (
            // If isAuthenticated is false, show Login button
            <Link to="/login">
              <Button
                type="primary"
                icon={<LoginOutlined />}
                style={styles.loginButton}
              >
                Login
              </Button>
            </Link>
          )}
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