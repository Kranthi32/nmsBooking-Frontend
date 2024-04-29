import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios'; 

const ManageMovies = () => {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    language: '',
    image: '',
    price: '',
    totalTickets: '',
    bookedTickets: '',
    discountPercent: '',
    releaseDate: '',
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:3001/movies'); 
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
    setFormData({
      name: '',
      description: '',
      language: '',
      image: '',
      price: '',
      totalTickets: '',
      bookedTickets: '',
      discountPercent: '',
      releaseDate: '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (selectedMovie) {
        await axios.put(`http://localhost:3001/movies/${selectedMovie.id}`, formData);
      } else {
        await axios.post('http://localhost:3001/movies', formData);
      }
      fetchMovies(); 
      handleCloseModal();
    } catch (error) {
      console.error('Error saving movie:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEdit = (movie) => {
    setSelectedMovie(movie);
    setFormData({
      name: movie.name,
      description: movie.description,
      language: movie.language,
      image: movie.image,
      price: movie.price,
      totalTickets: movie.totalTickets,
      bookedTickets: movie.bookedTickets,
      discountPercent: movie.discountPercent,
      releaseDate: movie.releaseDate,
    });
    handleShowModal();
  };

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this movie?");
      if (confirmDelete) {
        await axios.delete(`http://localhost:3001/movies/${id}`);
        fetchMovies(); 
      }
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  return (
    <>
      <Row className="mb-3">
        <Col>
          <Button variant="primary" onClick={handleShowModal} className="float-end">
            Add Movie
          </Button>
        </Col>
      </Row>

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
                <Button variant="danger" onClick={() => handleDelete(movie.id)}>Delete Movie</Button>
                <Button variant="primary" className="ms-2" onClick={() => handleEdit(movie)}>Edit Movie</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie ? 'Edit Movie' : 'Add Movie'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" value={formData.description} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="language">
              <Form.Label>Language</Form.Label>
              <Form.Control type="text" name="language" value={formData.language} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" name="image" value={formData.image} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="totalTickets">
              <Form.Label>Total Tickets</Form.Label>
              <Form.Control type="number" name="totalTickets" value={formData.totalTickets} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="bookedTickets">
              <Form.Label>Booked Tickets</Form.Label>
              <Form.Control type="number" name="bookedTickets" value={formData.bookedTickets} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="discountPercent">
              <Form.Label>Discount Percent</Form.Label>
              <Form.Control type="number" name="discountPercent" value={formData.discountPercent} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="releaseDate">
              <Form.Label>Release Date</Form.Label>
              <Form.Control type="date" name="releaseDate" value={formData.releaseDate} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              {selectedMovie ? 'Save Changes' : 'Add'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ManageMovies;
