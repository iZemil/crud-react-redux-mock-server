import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import Departments from './Departments';
import Employees from './Employees';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header"></header>
          <Container>
            <Row>
              <Col xs="12" sm="4" md="2">
                <Nav vertical>
                  <NavItem>
                    <Link to="/departments" className="nav-link">Departments</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/employees" className="nav-link">Employees</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/" className="nav-link">About</Link>
                  </NavItem>
                </Nav>
              </Col>
              <Col xs="12" sm="8" md="10">
                <Route exact path="/" component={About}/>
                <Route path="/departments" component={Departments}/>
                <Route path="/employees" component={Employees}/>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
