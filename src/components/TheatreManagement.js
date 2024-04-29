import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

function TheatreManagement() {
  const [theatres, setTheatres] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTheatre, setNewTheatre] = useState('');

  useEffect(() => {
    fetchTheatres();
  }, []);

  const fetchTheatres = () => {
    // Fetch theatres from API and update state
    // Example:
    // fetch('http://localhost:3000/theatres')
    //   .then(response => response.json())
    //   .then(data => setTheatres(data))
    //   .catch(error => console.error('Error fetching theatres:', error));
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setNewTheatre(e.target.value);
  };

  const handleAddTheatre = () => {
    // Add new theatre to API
    // Example:
    // fetch('http://localhost:3000/theatres', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ name: newTheatre })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     setTheatres([...theatres, data]);
    //     setNewTheatre('');
    //     handleCloseModal();
    //   })
    //   .catch(error => console.error('Error adding theatre:', error));
  };

  const handleDeleteTheatre = (id) => {
    // Delete theatre from API
    // Example:
    // fetch(`http://localhost:3000/theatres/${id}`, {
    //   method: 'DELETE'
    // })
    //   .then(() => {
    //     setTheatres(theatres.filter(theatre => theatre.id !== id));
    //   })
    //   .catch(error => console.error('Error deleting theatre:', error));
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Theatre Management</h2>
      <Button variant="primary" onClick={handleShowModal}>Add Theatre</Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Theatre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Theatre Name" value={newTheatre} onChange={handleChange} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleAddTheatre}>Add</button>
          </form>
        </Modal.Body>
      </Modal>

      <ul className="list-group mt-4">
        {theatres.map(theatre => (
          <li key={theatre.id} className="list-group-item d-flex justify-content-between align-items-center">
            {theatre.name}
            <button className="btn btn-danger" onClick={() => handleDeleteTheatre(theatre.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TheatreManagement;
