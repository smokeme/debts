import React, { Component } from 'react';
import $ from 'jquery'
import uuid from 'uuid';
import MyPlan from './MyPlan'
class MyForm extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      amount: 0,
      interest: 0,
      duration: 0,

      debt: {
        name: "",
        amount: 0,
        interest: 0,
        duration: 0,
        interestamount: 0,
        totalamount: 0,
        instalment: 0,
        active: true,
      }
    }
  }
  handleSubmit(e){
    e.preventDefault();
    $('#closeButton').click();
    this.autoCalc()
  }
  pushDebt(){
    this.props.pushDebt(this.state.debt)
  }
  autoCalc(){
    var name = this.state.name
    var duration = Number(this.state.duration)
    var amount = Number(this.state.amount)
    var interest = Number(this.state.interest / 100)

    var interestamount = amount *  interest
    var totalamount = interestamount + amount
    var instalment = totalamount / duration
    this.setState({debt: {
      name: name,
      amount: amount,
      interest: interest,
      duration: duration,
      interestamount: interestamount,
      totalamount: totalamount,
      instalment: instalment,
      active: true,
      id: uuid.v4()
    }
  }, this.pushDebt.bind(this))

  }
  render() {
    return (
      <div className="modal fade" id="squarespaceModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
  <div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
    <h3 className="modal-title" id="lineModalLabel">Add a Debt</h3>
    </div>
    <form onSubmit={this.handleSubmit.bind(this)}>

    <div className="modal-body">

              <div className="form-group">
                <label htmlFor="exampleInputName1">Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter name" onChange={(x) => {this.setState({name: x.target.value})}}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputAmount1">Amount</label>
              <input type="number" className="form-control" id="exampleInputAmount1" placeholder="Enter Amount" onChange={(x) => {this.setState({amount: x.target.value})}}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputInterest1">Interest</label>
              <input type="float" className="form-control" id="exampleInputInterest1" placeholder="Enter Interest" onChange={(x) => {this.setState({interest: x.target.value}) ; this.autoCalc.bind(this) }}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputDuration1">Duration</label>
              <input type="number" className="form-control" id="exampleInputDuration1" placeholder="Enter Duration" onChange={(x) => {this.setState({duration: x.target.value})}}/>
              </div>

              <button type="submit" className="btn btn-default">Submit</button>

    </div>
    <div className="modal-footer hidden">
      <div className="btn-group btn-group-justified" role="group" aria-label="group button">
        <div className="btn-group" role="group">
          <button type="button" id='closeButton' className="btn btn-default" data-dismiss="modal"  role="button">Close</button>
        </div>
        <div className="btn-group btn-delete hidden" role="group">
          <button type="button" id="delImage" className="btn btn-default btn-hover-red" data-dismiss="modal"  role="button">Delete</button>
        </div>
        <div className="btn-group" role="group">
          <button type="button" id="saveImage" className="btn btn-default btn-hover-green" data-action="save" role="button">Save</button>
        </div>
      </div>
    </div>
  </form>

  </div>
  </div>
</div>
);
}
}

export default MyForm;
