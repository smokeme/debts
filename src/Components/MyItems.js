import React, { Component } from 'react';
import uuid from 'uuid';

class MyItems extends Component {
  handleChange(id){
    this.props.handleChange(id)

  }
  render() {
    let debts;
    if (this.props.debts) {
        debts = this.props.debts.map(
          (debt) => {
            return (
              <div key={debt.id } onClick={this.handleChange.bind(this, debt.id)} className="col-sm-4" >
                <div className="box text-center contact-us-box">
                  <div className={debt.active ? "incon-box" : "incon-box-disabled" }>
                  <i className="fa fa-money" aria-hidden="true"></i>
                  </div>
                <h3 className="box-tittle">Name: {debt.name}</h3>
                  <p className="box-text">Amount: {debt.amount}</p>
                  <p className="box-text">Interest: {debt.interest}</p>
                  <p className="box-text">Interest Amount: {debt.interestamount}</p>
                  <p className="box-text">Duration: {debt.duration}</p>
                  <p className="box-text">Total: {debt.totalamount}</p>
                </div>
              </div>
            );
          }
      )
    }
    return (
      <div>{debts}</div>
    );
  }
}

export default MyItems;
