import React, { Component } from 'react';

class MyPlan extends Component {
  render() {

    let plans;
     if(this.props.plan){

     plans = this.props.plan.map(
      (item) => {
        return (
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
      <tbody >
        {plans}
      </tbody>
    );
  }
}

export default MyPlan;
