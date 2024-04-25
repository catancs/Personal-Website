import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Home.css';


function Home() {
  return (
    <>
      <Container className="text-center mt-4">
      <h1 className="welcome-message">Hello, I'm Catalin</h1>

      </Container>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Section*/}
      <Container className="mt-3">
      <section id="about" className="my-5">
  <h2>About Me</h2>
  {/* Content for About Me section will go here */}
</section>
<section id="projects" className="my-5">
  <h2>Projects</h2>
  {/* Content for Projects section will go here */}
</section>
<section id="contact" className="my-5">
  <h2>Contact</h2>
  {/* Content for Contact section will go here */}
</section>

      </Container>
    </>
  );
}

export default Home;
