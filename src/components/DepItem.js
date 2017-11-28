import React, { Component } from 'react';

export default class DepItem extends Component {
  state = {
    isEdit: false,
    savedCellValue: this.props.item.name,
    cellValue: this.props.item.name
  }

  handleChange(e) {
    this.setState({
      cellValue: e.target.value
    })
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
    this.props.updateClick(this.props.item.id, this.state.cellValue);
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
            value={cellValue}
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
        <td>{cellValue}</td>
        <td className="service-cell">
          <div className="t-ico edit-ico" onClick={ this.editCell.bind(this) } ></div>
          <div className="t-ico remove-ico" onClick={ () => removeClick(item.id) } ></div>
        </td>
      </tr>
    )
  }
}