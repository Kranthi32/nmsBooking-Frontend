import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

function GenreManagement() {
  const [genres, setGenres] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newGenre, setNewGenre] = useState('');

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = () => {
    // Fetch genres from API and update state
    // Example:
    // fetch('http://localhost:3000/genres')
    //   .then(response => response.json())
    //   .then(data => setGenres(data))
    //   .catch(error => console.error('Error fetching genres:', error));
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setNewGenre(e.target.value);
  };

  const handleAddGenre = () => {
    // Add new genre to API
    // Example:
    // fetch('http://localhost:3000/genres', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ name: newGenre })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     setGenres([...genres, data]);
    //     setNewGenre('');
    //     handleCloseModal();
    //   })
    //   .catch(error => console.error('Error adding genre:', error));
  };

  const handleDeleteGenre = (id) => {
    // Delete genre from API
    // Example:
    // fetch(`http://localhost:3000/genres/${id}`, {
    //   method: 'DELETE'
    // })
    //   .then(() => {
    //     setGenres(genres.filter(genre => genre.id !== id));
    //   })
    //   .catch(error => console.error('Error deleting genre:', error));
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Genre Management</h2>
      <Button variant="primary" onClick={handleShowModal}>Add Genre</Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Genre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Genre Name" value={newGenre} onChange={handleChange} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleAddGenre}>Add</button>
          </form>
        </Modal.Body>
      </Modal>

      <ul className="list-group mt-4">
        {genres.map(genre => (
          <li key={genre.id} className="list-group-item d-flex justify-content-between align-items-center">
            {genre.name}
            <button className="btn btn-danger" onClick={() => handleDeleteGenre(genre.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenreManagement;
