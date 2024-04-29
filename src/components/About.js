
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <h1 className="text-center mb-4 text-primary">About NMS Cinemas</h1>
          <p className="text-secondary">NMS Cinemas is a chain of single-screen theaters that offer a variety of movies in different genres and languages at affordable prices. Established in 2021 in Pune, India, NMS Cinemas has been committed to providing quality entertainment to its audience.</p>
          <p className="text-secondary">However, recent trends in the industry have posed challenges to traditional theater businesses like NMS Cinemas. The rise of online ticket booking platforms, such as BookMyShow and Paytm, has changed the landscape of movie ticket sales, leading to a decline in theater footfall.</p>
          <p className="text-secondary">In response to these challenges, NMS Cinemas has decided to embrace technology and embark on the journey of digital transformation. As part of this initiative, we are developing an online movie ticket booking web application that will offer a seamless and user-friendly experience to our customers.</p>
          <p className="text-secondary">As a Full Stack developer working on this project, you play a crucial role in bringing our vision to life. By leveraging your skills and expertise, we aim to create a platform that not only meets but exceeds the expectations of our audience.</p>
          <p className="text-secondary">Thank you for joining us on this exciting journey as we redefine the movie-going experience for our patrons.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
