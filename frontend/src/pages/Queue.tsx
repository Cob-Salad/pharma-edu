import React from 'react';
import Navbar from '../components/Navbar';
import NavItem from '../components/NavItem';

const QueuePage: React.FC = () => {
  // Inline styles specific to QueuePage
  const pageStyles = {
    cardContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px',
      backgroundColor: '#f5f5f5',
    },
    card: {
      width: '244.58px',
      height: '300px',
      backgroundColor: '#34495e',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      margin: '16px',
    }
  };

  // Card component defined within QueuePage for simplicity
  const Card: React.FC<{ title: string }> = ({ title }) => (
    <div style={pageStyles.card}>
      <p>{title}</p>
    </div>
  );

  return (
    <div>
      <Navbar>
        <NavItem href="#">Prescription</NavItem>
        <NavItem href="#" active>Queue</NavItem>
        <NavItem href="#">Patients</NavItem>
        <NavItem href="#">Doctors</NavItem>
        <NavItem href="#">Medications</NavItem>
        <div>DIXIE TECHNICAL COLLEGE</div>
      </Navbar>
      <div style={pageStyles.cardContainer}>
        <Card title="Scan Image" />
        <Card title="Scan Image" />
        <Card title="Scan Image" />
        <Card title="Scan Image" />
        <Card title="Scan Image" />
      </div>
    </div>
  );
};

export default QueuePage;
