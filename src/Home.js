import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {

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
      <Container className="text-center">
        <h1 className="pulse">Welcome to my website, I'm Catalin!</h1>
      </Container>
      <Container className="paper-sheet">
        <section id="about" className="my-4">
          <h2><span class="material-symbols-outlined">info</span> About Me</h2>

          <p>I'm a 3rd year Computer Science student at <a href="https://vu.nl/nl" target="_blank" rel="noopener noreferrer" className="about-link" >Vrije Universiteit Amsterdam</a>, 
          currently doing my thesis in the <a href="https://research.vu.nl/en/organisations/software-and-sustainability-s2" className="about-link" target="_blank" rel="noopener noreferrer">Software and Sustainability (S2)</a> research group. 
             I minored in <a href="https://studiegids.vu.nl/EN/Minor/2023-2024/data-science#/tab=2&code=&panel=" target="_blank" rel="noopener noreferrer" className="about-link" >Data Science</a> and I'm interested in Machine Learning and Artificial Intelligence.
             I also work part-time as a student teaching assistant, helping younger students in the learning process.
          </p>   


          
            </section>
        <section id="projects" className="my-4">
          <h2 style={{ marginBottom: '0.5em' }}><span class="material-symbols-outlined">potted_plant</span> Professional Experience</h2>   
          <p style={{ marginBottom: '1.5em' }}>
          <strong style={{ fontSize: '1.2em', fontStyle: 'italic' }}>
              <span className="material-symbols-outlined">energy_savings_leaf</span>
               Warehouse Optimization Associate
          </strong><br />
            <a href="https://www.intelligentfridges.com/" target="_blank" rel="noopener noreferrer" className="about-link" >Husky Intelligent Fridges</a> | October 2022 – February 2023<br />
            • Specialized in software process optimization, hardware assembly, and database management.<br />
            • Provided QA, B2B, and B2C remote/on-site technical support.<br />
            • Configured Raspberry Pi devices and conducted FAT testing.
          </p>
            <p>


            <strong style={{ fontSize: '1.2em', fontStyle: 'italic' }}>
            <span class="material-symbols-outlined"> network_manage </span>  Junior Network Engineer Intern</strong><br />
            <strong>CONS IT International </strong>| July 2020 – September 2020<br />
              • Assisted in designing and implementing network infrastructures, including routers, switches, and firewalls.<br />
              • Gained experience with TCP/IP, VoIP, VPN, DNS, VLAN, and QoS technologies.
            </p>
        </section>


        <section id="contact" className="my-4">
          <h2><span class="material-symbols-outlined">stacks</span> Skills</h2>
          <p> 

              • Python, TensorFlow, Keras, Streamlit<br />
              • Azure, React, .NET, OpenAI API <br />
              • Node.js, RESTful APIs, SQLite<br />
              • Deep Learning, Neural Networks, Transformers, Data Analysis <br />
              • Networking (TCP/IP, DNS, VPN) <br />
              • Agile Methodologies, DevOps, CI/CD


          </p>
        </section>

        <section id="contact" className="my-4">
          <h2><span class="material-symbols-outlined">forest</span> Certifications</h2>

          <p> 

          • <strong>Microsoft Certified:</strong> Azure Fundamentals<br />
          • <strong>Cisco CCNAv7:</strong> Introduction to Networks<br />
          • <strong>Cisco:</strong> Supporting Cisco Collaboration Devices<br />
          • <strong>Accenture:</strong> Developer Job Simulation<br />
          • <strong>Wells Fargo:</strong> Software Engineering Job Simulation<br />
          • <strong>Skyscanner:</strong> Front-End Software Engineering Job Simulation<br />
          • <strong>Verizon:</strong> Cloud Platform Job Simulation<br />
          • <strong>DeepLearning.AI:</strong> Convolutional Neural Networks<br />
          • <strong>Fortinet:</strong> Certified Fundamentals Cybersecurity<br />
          • <strong>Coursera:</strong> Digital Transformations<br />
          • <strong>Coursera:</strong> Wireless Communcation for Everybody


          </p>

        </section>

        <section id="contact" className="my-4">
          <h2><span class="material-symbols-outlined">link</span> Links</h2>
          
          • <a href="https://www.linkedin.com/in/niculescu-catalin-stefan-9aa531197/" target="_blank" rel="noopener noreferrer" className="about-link" >LinkedIn</a> <br />
          • <a href="https://github.com/catancs" target="_blank" rel="noopener noreferrer" className="about-link" >Github</a> <br />
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


export default Home;


