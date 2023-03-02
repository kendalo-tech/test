import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Button, Col, Container, Nav, Navbar, NavbarBrand, Row} from 'react-bootstrap';
import { Instagram } from 'react-bootstrap-icons';


const TopMenu = () => (


    <Navbar expand={'lg'}>
      <Container>
        <div className="justify-content-start">
          <NavbarBrand className="nav-item top-pad">
            <Nav.Link><Instagram/></Nav.Link>
          </NavbarBrand>
        </div>

        <div className="justify-content-center">
          <Navbar className="navbar-expand d-block">
            <img id="toplogo"
                 src="https://courses.ics.hawaii.edu/ics314s23/morea/ui-frameworks/wod-boardroom-logo.png"
                 width="70px" alt="logo"></img>
          </Navbar>
        </div>

        <div className="justify-content-end">
          <Button className="btn-dark">
            Menu
          </Button>


        </div>
      </Container>
    </Navbar>



);

const CenterText = () => (
  <div className="justify-content-center">
    <img id="center" src="https://courses.ics.hawaii.edu/ics314s23/morea/ui-frameworks/wod-boardroom-logo.png"
         alt="logo" height="500px"></img>
  </div>
);

const BottomMenu = () => (
  <footer className="mt-auto bg-light py-3">
    <Container>
      <Row className="py-5">
        <Col>
          <Container>
            <h3>Hours</h3>
            <p>Wednesday - Thursday 5pm – 10pm <br/>Friday - Saturday 5pm – 11pm <br/>Sunday Brunch 10am -
              2pm</p>
          </Container>
        </Col>



      <Col>
        <h3>Stay Connected</h3>
        <Nav className="navbar-nav">
          <li><u>Instagram</u></li>
          <li><u>Contact</u></li>
          <li><u>Gift Cards</u></li>
          <li><u>Reservation</u></li>
        </Nav>
      </Col>

      <Col>

      </Col>


      <Col>
        <h3>THE BOARDROOM</h3>
        <Nav className="navbar-nav">
          <li>44 Kainehe St.</li>
          <li>Kailua, HI 96734</li>
          <br/>
          <li>(808)807-5640</li>
        </Nav>

      </Col>

      </Row>

    </Container>


  </footer>
);





const Boardroom = () => (
  <div className ="d-flex flex-column min-vh-100">
    <div className="px-o justify-content-center pb-2">
      <TopMenu/>
      <CenterText/>
      <BottomMenu/>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Boardroom/>);