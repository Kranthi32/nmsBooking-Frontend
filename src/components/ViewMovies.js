
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Row, Col } from 'react-bootstrap';

function ViewMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //Fetch movie data from backend API
  
    axios.get('http://localhost:3001/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie data:', error);
      });
  }, []);

  return (
    <Container className="mt-4">
     
      <Row xs={1} md={2} lg={3} className="g-4">
        {movies.map(movie => (
          <Col key={movie.id}>
            <Card style={{ backgroundImage: `url(${movie.image})`, backgroundSize: 'cover', color: 'white', filter: 'brightness(70%)' }}>
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>
                  Release Date: {movie.releaseDate}<br />
                  Price: ${movie.price}<br />
                  Total Tickets: {movie.totalTickets}<br />
                  Booked Tickets: {movie.bookedTickets}
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ViewMovies;
