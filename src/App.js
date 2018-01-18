import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyItems from './Components/MyItems'
import MyPlan from './Components/MyPlan'

class App extends Component {
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
        <MyItems active={true}/>
        <MyItems active={false}/>
        <MyItems active={true}/>
        <MyItems active={false}/>
        <MyItems active={true}/>
        <MyItems active={false}/>
        <MyItems active={true}/>
        <MyItems active={false}/>
    </div>
    <hr/>
    <div className="center"><button data-toggle="modal" data-target="#squarespaceModal" className="btn btn-primary center-block">Open Form</button></div>
    <div className="modal fade" id="squarespaceModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
          <h3 className="modal-title" id="lineModalLabel">My Modal</h3>
        </div>
        <div className="modal-body">

          <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputFile">File input</label>
                    <input type="file" id="exampleInputFile"/>
                    <p className="help-block">Example block-level help text here.</p>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox"/> Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>

        </div>
        <div className="modal-footer">
          <div className="btn-group btn-group-justified" role="group" aria-label="group button">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" data-dismiss="modal"  role="button">Close</button>
            </div>
            <div className="btn-group btn-delete hidden" role="group">
              <button type="button" id="delImage" className="btn btn-default btn-hover-red" data-dismiss="modal"  role="button">Delete</button>
            </div>
            <div className="btn-group" role="group">
              <button type="button" id="saveImage" className="btn btn-default btn-hover-green" data-action="save" role="button">Save</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <hr/>

    <h2 className="sub-header">Repayment Details</h2>
    <div className="table-responsive">
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
        <tbody>
          <MyPlan />
          <MyPlan />
          <MyPlan />
          <MyPlan />
          <MyPlan />
          <MyPlan />
          <MyPlan />
          <MyPlan />
          <MyPlan />
          <MyPlan />
          <MyPlan />
          <tr>
            <td>2</td>
            <td>50</td>
            <td>50</td>
            <td>0</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
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
          <tr>
            <td>2</td>
            <td>80</td>
            <td>20</td>
            <td>100</td>
            <td>2</td>
          </tr>
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
