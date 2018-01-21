import React, { Component } from 'react';

class MyPlan extends Component {
  render() {

    let plans;
     if(this.props.plan){

     plans = this.props.plan.map(
      (item) => {
        if (item.opening > 1) return (
        <tr key={item.number}>
          <td>{item.number}</td>
          <td>{item.opening}</td>
          <td>{item.instalment}</td>
          <td>{item.closing}</td>
        <td>{item.numberofDebts}</td>
        </tr>

      )
    }
    )
  }
    return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Instalment Number</th>
              <th>Opening Balance</th>
              <th>Instalment Amount</th>
              <th>Closing Balance</th>
              <th>Number of Debts</th>
            </tr>
          </thead>
      <tbody >
        {plans}
      </tbody>
      </table>
    );
  }
}

export default MyPlan;
