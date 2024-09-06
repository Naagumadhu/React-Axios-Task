import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function TopBar() {
  let navigate = useNavigate()
  
  return <> 
      <Navbar expand="lg"  className="bg-body" >
      <Container>
        <Navbar.Brand >Axios CRUD</Navbar.Brand>
        <Navbar.Toggle   aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link  onClick={()=>navigate('/')}><i className="fa-solid fa-house ">&nbsp;Home</i></Nav.Link>
            <Nav.Link onClick={()=>navigate('/add-user')}><i className="fa-solid fa-user-plus">&nbsp;AddUser</i></Nav.Link>
            <Nav.Link onClick={()=>navigate('/dashboard')}><i className="fa-solid fa-chart-line">&nbsp;Dashboard</i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default TopBar
