import React, { Component } from 'react';

export default class Employee extends Component {
  state = {
    isEdit: false,
    savedCellValue: {
      fName: this.props.item.first_name,
      lName: this.props.item.last_name,
      depNo: this.props.item.department_no
    },
    cellValue: {
      fName: this.props.item.first_name,
      lName: this.props.item.last_name,
      depNo: this.props.item.department_no
    }
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
      cellValue: {
          ...prevState.cellValue,
          [name]: value
      }
    }))
  }

  editCell() {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  cancelEdit() {
    this.setState({
      isEdit: false,
      cellValue: this.state.savedCellValue
    });
  }

  // Send updated data
  updateClick() {
    this.props.updateClick(this.props.item.id, this.state.cellValue.fName,this.state.cellValue.lName,this.state.cellValue.depNo);
    this.setState({
      isEdit: false
    });
  }

  render() {
    const { item, removeClick } = this.props;
    const { isEdit, cellValue } = this.state;

    return (
      isEdit ? 
      <tr>
        <td>{item.id}</td>
        <td>
          <input type="text"
            name="fName"
            value={cellValue.fName}
            idx={item.id}
            onChange={(e) => this.handleChange(e) } />
        </td>
        <td>
          <input type="text"
            name="lName"
            value={cellValue.lName}
            idx={item.id}
            onChange={(e) => this.handleChange(e) } />
        </td>
        <td>
          <input type="text"
            name="depNo"
            style={{width: '50px'}}
            value={cellValue.depNo}
            idx={item.id}
            onChange={(e) => this.handleChange(e) } />
        </td>
        <td className="service-cell">
          <div>
            <div className="t-ico update-ico" onClick={ this.updateClick.bind(this) } ></div>
            <div className="t-ico cancel-ico" onClick={ this.cancelEdit.bind(this) } ></div>
          </div>
        </td>
      </tr>
      :
      <tr>
        <td>{item.id}</td>
        <td>{cellValue.fName}</td>
        <td>{cellValue.lName}</td>
        <td>{cellValue.depNo}</td>
        <td className="service-cell">
          <div className="t-ico edit-ico" onClick={ this.editCell.bind(this) } ></div>
          <div className="t-ico remove-ico" onClick={ () => removeClick(item.id) } ></div>
        </td>
      </tr>
    )
  }
}