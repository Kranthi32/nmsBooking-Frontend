import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

function MovieManagement() {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newMovie, setNewMovie] = useState({
    name: '',
    ticketPrice: '',
    language: '',
    description: '',
    showTimings: []
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    // Fetch movies from API and update state
    // Example:
    // fetch('http://localhost:3000/movies')
    //   .then(response => response.json())
    //   .then(data => setMovies(data))
    //   .catch(error => console.error('Error fetching movies:', error));
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddMovie = () => {
    // Add new movie to API
    // Example:
    // fetch('http://localhost:3000/movies', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(newMovie)
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     setMovies([...movies, data]);
    //     setNewMovie({
    //       name: '',
    //       ticketPrice: '',
    //       language: '',
    //       description: '',
    //       showTimings: []
    //     });
    //     handleCloseModal();
    //   })
    //   .catch(error => console.error('Error adding movie:', error));
  };

  const handleDeleteMovie = (id) => {
    // Delete movie from API
    // Example:
    // fetch(`http://localhost:3000/movies/${id}`, {
    //   method: 'DELETE'
    // })
    //   .then(() => {
    //     setMovies(movies.filter(movie => movie.id !== id));
    //   })
    //   .catch(error => console.error('Error deleting movie:', error));
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Movie Management</h2>
      <Button variant="primary" onClick={handleShowModal}>Add Movie</Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={newMovie.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="ticketPrice" className="form-label">Ticket Price</label>
              <input type="text" className="form-control" id="ticketPrice" name="ticketPrice" value={newMovie.ticketPrice} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="language" className="form-label">Language</label>
              <input type="text" className="form-control" id="language" name="language" value={newMovie.language} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea className="form-control" id="description" name="description" value={newMovie.description} onChange={handleChange}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleAddMovie}>Add</button>
          </form>
        </Modal.Body>
      </Modal>

      <ul className="list-group mt-4">
        {movies.map(movie => (
          <li key={movie.id} className="list-group-item d-flex justify-content-between align-items-center">
            {movie.name}
            <button className="btn btn-danger" onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieManagement;
