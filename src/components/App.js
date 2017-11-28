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
        <div className="App">
          <header className="App-header">
            <p className="App-title">simple CRUD with react, redux, mock-server</p>
          </header>
          <Container>
            <Row>
              <Col xs="2">
                <Nav vertical>
                  <NavItem>
                    <Link to="/" className="nav-link">About</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/departments" className="nav-link">Departments</Link>
                  </NavItem>
                  <NavItem>
                  <Link to="/employees" className="nav-link">Employees</Link>
                  </NavItem>
                </Nav>
              </Col>
              <Col xs="10">
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
