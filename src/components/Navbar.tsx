// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav style={styles.nav}>
//       <Link to="/" style={styles.link}>Home</Link>
//       <Link to="/doctors" style={styles.link}>Doctors</Link>
//       <Link to="/conditions" style={styles.link}>Conditions</Link>
//       <Link to="/clinics" style={styles.link}>clinics</Link>
//       <Link to="/products" style={styles.link}>Products</Link>
//       <Link to="/appointment" style={styles.link}>Appontment</Link>
//       <Link to="/regestration" style={styles.link}>Regestration</Link>
//       <Link to="/login" style={styles.link}>Login</Link>
//     </nav>
//   );
// };

// const styles = {
//   nav: {
//     padding: '10px',
//     backgroundColor: '#f0f0f0',
//     display: 'flex',
//     gap: '10px',
//     justifyContent: 'center'
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#333',
//     fontWeight: 'bold'
//   }
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      {/* Left side links */}
      <div style={styles.left}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/doctors" style={styles.link}>Doctors</Link>
        <Link to="/conditions" style={styles.link}>Conditions</Link>
        <Link to="/clinics" style={styles.link}>Clinics</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/appointment" style={styles.link}>Appointment</Link>
      </div>

      {/* Right side AntD buttons */}
      <div style={styles.right}>
        <Link to="/Login">
          <Button type="primary">Sign In</Button>
        </Link>
        <Link to="/regestration">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    padding: '10px 20px',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as React.CSSProperties,
  left: {
    display: 'flex',
    gap: '10px',
  } as React.CSSProperties,
  right: {
    display: 'flex',
    gap: '10px',
  } as React.CSSProperties,
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  } as React.CSSProperties,
};

export default Navbar;

