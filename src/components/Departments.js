import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { addDepartment, fetchDepartments, editDepartment, removeDepartment } from '../actions';

class Departments extends Component {
  componentDidMount() {
    const url = `http://localhost:3010/departments`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.props.fetchDepartments(data);
    })
    .catch((error) => console.log(`Ошибка ${error}`) )
  }

  editDepartment(e) {
    let newText = 'Проверка 222';
    console.log(newText);
    let id = e.target.getAttribute('idx');

    this.props.editDepartment(id, newText);
  }

  cancelEdit() {

  }

  removeDepartment(e) {
    console.log(e.target.getAttribute('idx'));
    let id = e.target.getAttribute('idx');
    this.props.removeDepartment(id);
  }

  handleChange(e) {
    let text = e.target.value;
    let id = e.target.getAttribute('idx');
    
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = e.target.elements.departmentName.value;
    
    if (name.trim()) { 
      e.target.elements.departmentName.value = '';
      this.props.addDepartment(name);
     }
  }

  render() {
    const { departments } = this.props;

    return (
      <div className="department">
        <h1>Departments</h1>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <Label for="departmentName">Name of department:</Label>
            <Input type="text" autoComplete="off"
              name="departmentName" id="departmentName" 
              placeholder="Type name..." />
          </FormGroup>
          <Button type="submit" className="btn btn-default">Add department</Button>
        </Form>
        <hr className="my-3" />
        <h2>List of departments</h2>
        <Table>
          <thead>
            <tr>
              <th style={{width: '80px'}}>No.</th>
              <th>Departments</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { departments.map(item => <tr key={item.id}>
              <td>{item.id}</td>
              <td><Input type="text" value={item.name}
                idx={item.id}
                onChange={(e) => this.handleChange(e) } /></td>
              <td className="service-cell">
                <div className="t-ico update-ico" onClick={ (e) => this.editDepartment(e) } idx={item.id} ></div>
                <div className="t-ico cancel-ico" onClick={ (e) => this.cancelEdit(e) } idx={item.id} ></div>
                <div className="t-ico remove-ico" onClick={ (e) => this.removeDepartment(e) } idx={item.id} ></div>
              </td>
            </tr>) }
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    departments: state.departments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDepartment: (name) => {
      dispatch(addDepartment(name));
    },
    fetchDepartments: (data) => {
      dispatch(fetchDepartments(data));
    },
    editDepartment: (id, newName) => {
      dispatch(editDepartment(id, newName));
    },
    removeDepartment: (id) => {
      dispatch(removeDepartment(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Departments);