import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; 

function About() {
  const [showEmail, setShowEmail] = useState(false);

  const toggleEmail = () => setShowEmail(!showEmail); 

  return (
    <div className="beige-background">
      <Navbar className="blue-nav shadow-sm mb-0" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="text-center mt-4">
        <h1 className="pulse">Welcome to My Portfolio!</h1>
      </Container>
      <Container className="paper-sheet" style={{ backgroundColor: '#bbb486', margin: '1rem auto', padding: '2rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '800px', borderRadius: '15px' }}>

        <h2><span class="material-symbols-outlined">privacy_tip</span> About This Website</h2>
        <p>This website is designed to showcase my personal and professional projects as well as my skills in software development. It was built using a range of modern web technologies and design patterns, ensuring both simplicity and efficiency.</p>
        
        <section className="mt-4">
          <h2><span class="material-symbols-outlined">code</span> Technologies Used</h2>
          <p>The website is built with the React framework, utilizing features such as hooks for state management and routing to provide a single-page application experience. Style consistency is maintained through React-Bootstrap, enhancing the site's responsive design.</p>
          <ul>
            <li><strong>React:</strong> For building the user interface</li>
            <li><strong>React-Bootstrap:</strong> For layout and design</li>
            <li><strong>GitHub Pages:</strong> For hosting the website</li>
            <li><strong>React Router:</strong> For navigation within the application</li>
          </ul>
        </section>

        <section className="mt-4">
          <h2><span class="material-symbols-outlined">polyline</span> Design Principles</h2>
          <p>The design focuses on a clean and intuitive user interface, prioritizing user experience. The layout is structured to facilitate ease of navigation, with a clear distinction between different sections.</p>
        </section>
        
        <section className="mt-4">
          <h2><span class="material-symbols-outlined">mindfulness</span> Goals and Objectives</h2>
          <p>The primary goal of this website is to provide a professional online portfolio that effectively communicates my skills, projects, and educational background to potential employers or collaborators in the tech industry.</p>
        </section>

        <section id="contact" className="my-4">
          <h2><span class="material-symbols-outlined">link</span> Contact Me</h2>
          
          <p>If you have any questions or would like to get in touch, feel free to reach out via email:)</p>
          •<button onClick={toggleEmail} className="about-link" style={{ background: 'none', border: 'none', color: 'black', textDecoration: 'underline', cursor: 'pointer' }}>
          E-mail
        </button>
        <div className={`email-container ${showEmail ? 'show' : ''}`}>
        <a href="mailto:catalinniculescu20@gmail.com" style={{ color: 'black' }}>catalinniculescu20@gmail.com</a>
        </div>

          
        </section>
      </Container>
    </div>
  );
}

export default About;
