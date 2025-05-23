import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/doctors" style={styles.link}>Doctors</Link>
      <Link to="/conditions" style={styles.link}>Conditions</Link>
      <Link to="/clinics" style={styles.link}>clinics</Link>
      <Link to="/products" style={styles.link}>Products</Link>
      <Link to="/appointment" style={styles.link}>Appontment</Link>
    </nav>
  );
};

const styles = {
  nav: {
    padding: '10px',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center'
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold'
  }
};

export default Navbar;
