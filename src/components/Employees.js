import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Table } from 'reactstrap';

export default class Departments extends Component {
  handleSubmit() {
    console.log('dep');
  }

  render() {

    return (
      <div className="department">
        <h1>Employees</h1>
        <Form onSubmit={this.handleSubmit()}>
          <FormGroup>
            <Input type="text" name="fName" id="fName" placeholder="First name" />
          </FormGroup>
          <FormGroup>
            <Input type="text" name="lName" id="lName" placeholder="Last name" />
          </FormGroup>
          <FormGroup>
            <Input type="text" name="depNum" id="depNum" placeholder="Department number" />
          </FormGroup>
          <Button type="submit" className="btn btn-default">Add employee</Button>
        </Form>
        <hr className="my-2" />
        <h2>List of employees</h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>23</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>33</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>69</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }

}