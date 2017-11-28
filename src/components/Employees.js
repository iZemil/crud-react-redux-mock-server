import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { addEmployee, fetchEmployees, updateEmployee, removeEmployee } from '../store/employees/actions';
import Employee from './Employee';

class Employees extends Component {
  componentDidMount() {
    const url = `http://localhost:3010/employees`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.props.fetchEmployees(data);
    })
    .catch((error) => console.log(`Ошибка ${error}`) )
  }

  updateEmployee(id, newFName, newLName, newDepNo) {
    this.props.updateEmployee(id, newFName, newLName, newDepNo);
  }

  removeEmployee(id) {
    this.props.removeEmployee(id);
  }

  handleChange(e) {
    let text = e.target.value;
    let id = e.target.getAttribute('idx');

    console.log(text, id)
  }

  handleSubmit(e) {
    e.preventDefault();
    let fName = e.target.elements.fName.value;
    let lName = e.target.elements.lName.value;
    let depNo = e.target.elements.depNo.value;
    
    if (fName.trim() && lName.trim() && depNo.trim()) { 
      e.target.elements.fName.value = '';
      e.target.elements.lName.value = '';
      e.target.elements.depNo.value = '';

      this.props.addEmployee(fName, lName, depNo);
     }
  }

  render() {
    const { employees } = this.props;

    return (
      <div className="department">
        <h1>Employees</h1>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <Input type="text" autoComplete="off"
              name="fName" placeholder="First name..." />
          </FormGroup>
          <FormGroup>
            <Input type="text" autoComplete="off"
              name="lName" placeholder="Last name..." />
          </FormGroup>
          <FormGroup>
            <Input type="text" autoComplete="off"
              name="depNo" placeholder="Employee number..." />
          </FormGroup>
          <Button type="submit" className="btn btn-default">Add employee</Button>
        </Form>
        <hr className="my-2" />
        <h2>List of employees</h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First name</th>
              <th>Last name</th>
              <th style={{width: '50px'}}>№Dep</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employees.map(item =>
              <Employee
                key={item.id}
                item={item}
                updateClick={this.updateEmployee.bind(this)}
                removeClick={this.removeEmployee.bind(this)} />
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addEmployee: (fName, lName, depNo) => {
      dispatch(addEmployee(fName, lName, depNo));
    },
    fetchEmployees: (data) => {
      dispatch(fetchEmployees(data));
    },
    updateEmployee: (id, newFName, newLName, newDepNo) => {
      dispatch(updateEmployee(id, newFName, newLName, newDepNo));
    },
    removeEmployee: (id) => {
      dispatch(removeEmployee(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);