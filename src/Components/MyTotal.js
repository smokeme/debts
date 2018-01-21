import React, { Component } from 'react';

class MyTotal extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.TotalInstalments}</td>
        <td>{this.props.TotalDebt}</td>
        <td>{this.props.TotalInterest}</td>
        <td>{this.props.TotalPaid}</td>
        <td>{this.props.TotalDebts}</td>
      </tr>
    );
  }
}
export default MyTotal;
