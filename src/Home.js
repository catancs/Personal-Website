import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; 




function Home() {
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
      <Container className="text-center">
        <h1 className="welcome-message">Welcome to my website!</h1>
      </Container>
      <Container className="paper-sheet">
        <section id="about" className="my-5">
          <h2>#About Me</h2>
          <p>I'm a 3rd year Computer Science student at <a href="https://vu.nl/nl" target="_blank" rel="noopener noreferrer" className="about-link" >Vrije Universiteit Amsterdam</a>, 
          currently doing my thesis in the <a href="https://research.vu.nl/en/organisations/software-and-sustainability-s2" className="about-link" target="_blank" rel="noopener noreferrer">Software and Sustainability (S2)</a> research group. 
             I minored in <a href="https://studiegids.vu.nl/EN/Minor/2023-2024/data-science#/tab=2&code=&panel=" target="_blank" rel="noopener noreferrer" className="about-link" >Data Science</a> and I'm interested in Machine Learning and Artificial Intelligence.
             I also work part-time as a student teaching assistant, helping younger students in the learning process.
          </p>   
          
            </section>
        <section id="projects" className="my-5">
          <h2>#Professional Experience</h2>
          <p>
            <strong style={{ fontSize: '1.2em' }}>Warehouse Optimization Associate</strong><br />
            <a href="https://www.intelligentfridges.com/" target="_blank" rel="noopener noreferrer" className="about-link" >Husky Intelligent Fridges</a> | October 2022 – February 2023<br />
              - Specialized in software process optimization, hardware assembly, and database management.<br />
              - Provided QA, B2B, and B2C remote/on-site technical support.<br />
              - Configured Raspberry Pi devices and conducted FAT testing.
          </p>
            <p>
            <strong style={{ fontSize: '1.2em' }}>Junior Network Engineer Intern</strong><br />
            CONS IT International| July 2020 – September 2020<br />
              - Assisted in designing and implementing network infrastructures, including routers, switches, and firewalls.<br />
              - Gained experience with TCP/IP, VoIP, VPN, DNS, VLAN, and QoS technologies.
            </p>
        </section>
        <section id="contact" className="my-5">
          <h2>Skills</h2>
          <p> 

              - Python, TensorFlow, Keras, Streamlit<br />
              - Node.js, RESTful APIs, SQLite<br />
              - Machine Learning, AI, Data Analysis<br />
              - Networking (TCP/IP, DNS, VPN) <br />
              - Agile Methodologies, DevOps, CI/CD


          </p>
        </section>

        <section id="contact" className="my-5">
          <h2>Certifications</h2>
          {/* Content for Contact section will go here */}
        </section>

        <section id="contact" className="my-5">
          <h2>Links</h2>
          {/* Content for Contact section will go here */}
        </section>
      </Container>
    </div>
  );
}


export default Home;


