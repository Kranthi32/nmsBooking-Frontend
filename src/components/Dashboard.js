
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import backgroundImage from '../Images/background.jpg';

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({ totalBookings: 0, totalMovies: 0 });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/movies/dashboard-data');
      setDashboardData(response.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  return (
    <div className="dashboard-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container className="mt-4">
        <h1>Welcome to NMS Cinemas Dashboard</h1>
        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Total Bookings</Card.Title>
                <Card.Text>{dashboardData.totalBookings}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Total Movies</Card.Title>
                <Card.Text>{dashboardData.totalMovies}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      
       
      </Container>
    </div>
  );
}

export default Dashboard;
