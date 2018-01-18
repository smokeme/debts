import React, { Component } from 'react';

class MyItems extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="box text-center contact-us-box">
          <div className={this.props.active ? "incon-box" : "incon-box-disabled" }>
          <i className="fa fa-money" aria-hidden="true"></i>
          </div>
        <h3 className="box-tittle">Name of Debt</h3>
        <p className="box-text">Amount of Debt</p>
        <p className="box-text">Interest Rate</p>
        <p className="box-text">Interest Amount</p>
        <p className="box-text">Duration of Debt</p>
        <p className="box-text">Total Amount</p>
        </div>
      </div>
    );
  }
}
export default MyItems;
