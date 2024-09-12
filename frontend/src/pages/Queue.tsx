import React from 'react';
import Navbar from '../components/Navbar';
import NavItem from '../components/NavItem';
import { Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
      <Container fluid={true} style={pageStyles.cardContainer}>
        <LinkContainer to="/new_prescription">
          <div>
          <Card title="Scan Image" />
          </div>
        </LinkContainer>
        <LinkContainer to="/new_prescription">
          <div>
          <Card title="Scan Image" />
          </div>
        </LinkContainer> 
        <LinkContainer to="/new_prescription">
          <div>
          <Card title="Scan Image" />
          </div>
        </LinkContainer> 
      </Container>
    </div>
  );
};

export default QueuePage;
