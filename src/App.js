import React, { Component } from 'react';
import './App.css';
import MyItems from './Components/MyItems'
import MyPlan from './Components/MyPlan'
import MyForm from './Components/MyForm'
import MyTotal from './Components/MyTotal'
import uuid from 'uuid';


class App extends Component {
  constructor() {
    super();
    this.state = {
      TotalInstalments: 0,
      TotalDebt: 0,
      TotalPaid: 0,
      TotalDebts: 0,
      TotalInterest: 0,
      mydebts: [
        {
          name: "Mobile Phone",
          amount: 80,
          interest: 25,
          duration: 2,
          interestamount: 20,
          totalamount: 100,
          instalment: 50,
          active: true,
          id: uuid.v4(),
        },


      ],
      debts: [],
    }
  }
  pushDebt(debt){
    let debts = this.state.mydebts
    debts.push(debt)
    this.setState({mydebts:debts}, this.createArray())
  }
  componentWillMount(){
    this.createArray()
  }

  createArray(){
    this.setState({debts:[]})
    var array = Array(this.getMaxDuration())

    for (var i = 0; i < array.length; i++) {
        array[i] = {
          number: i,
          opening: 0,
          instalment: 0,
          closing: 0,
          numberofDebts: 0

        }
      }
    this.setState({mylist:array}, () => {
      this.startPlanning();
      this.getTotals();
    })
  }
  handleChange(id){
    let debts = this.state.mydebts
    let index = debts.findIndex(debt => debt.id === id)
    debts[index].active = !debts[index].active
    this.setState({mydebts:debts}, () => this.createArray())
  }
  startPlanning(){
    this.state.mydebts.map(
      debt => this.Planner(debt)
    )
  }
  getDuration(){
    return this.state.mydebts.map(debt => debt.duration)
  }
  getMaxDuration(){
    return Math.max(...this.getDuration())
  }
  Planner(debt){
    if (debt.active) {
    var opening = debt.totalamount
    var instalment = debt.instalment
    var closing = 0
    var debts = this.state.mylist
    for(var i = 0; i < debt.duration; i++){
      closing = opening - instalment
      debts[i] = {
        number: i,
        opening: opening+debts[i].opening,
        instalment: instalment+debts[i].instalment,
        closing: closing+debts[i].closing,
        numberofDebts: 1+debts[i].numberofDebts,
      }
      opening = closing
    }
    this.setState({debts: debts})
  }
}
getTotals(){
  this.setState({
    TotalInstalments: 0,
    TotalDebt: 0,
    TotalPaid: 0,
    TotalDebts: 0,
    TotalInterest: 0,
  })
  this.state.mydebts.map(debt => {
    if (debt.active){
    this.setState({
      TotalDebt: this.state.TotalDebt+debt.amount,
      TotalInterest: this.state.TotalInterest+debt.interestamount,
      TotalPaid: this.state.TotalPaid+debt.totalamount,
      TotalDebt: 1+this.state.TotalDebts,
      TotalInstalments: this.getMaxDuration()
    })

  }
  })

}
  render() {
    return (
      <div className="index-content">
  <nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container-fluid ">
    <div className="navbar-header ">
      <a className="navbar-brand " href="#">Debt Calculator <i className="fa fa-calculator fa-6" aria-hidden="true"></i></a>
    </div>
  </div>
  </nav>

  <br/>
  <div className="container-fluid">
  <div className="row">
    <h1 className="page-header  text-center">Dashboard </h1>

    <div className="container">
      <div className="row mar-top-30">
        <div className="col-sm-4" >
          <div className="box text-center contact-us-box">

          <button style={{border:0, background: 0}}data-toggle="modal" data-target="#squarespaceModal" ><h3 className="box-tittle"><i className="fa glyphicon glyphicon-plus-sign" aria-hidden="true" style={{fontSize: 183}}></i></h3></button>
          </div>
        </div>
        <MyItems debts={this.state.mydebts} handleChange={this.handleChange.bind(this)}/>
    </div>
    <hr/>
  <MyForm pushDebt={this.pushDebt.bind(this)}/>
  <h2 className="sub-header">Repayment Details</h2>
  <div className="table-responsive">
  <MyPlan plan={this.state.debts}/>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Total Instalment Number</th>
            <th>Total Debt</th>
            <th>Total Interest Amount</th>
            <th>Total Paid</th>
            <th>Total Number of Debts</th>
          </tr>
        </thead>
        <tbody>
          <MyTotal TotalInstalments={this.state.TotalInstalments} TotalDebt={this.state.TotalDebt} TotalPaid={this.state.TotalPaid} TotalDebts={this.state.TotalDebts} TotalInterest={this.state.TotalInterest} />
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
</div>
    );
  }
}

export default App;
