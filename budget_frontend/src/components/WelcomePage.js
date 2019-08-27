import React, { Component } from "react";
import BudgetPage from "./BudgetPage";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

class WelcomePage extends Component {
  state = {
    showBudgetPage: false
  };

  showBudgetPage = () => {
    this.setState({
      showBudgetPage: true
    });
  };

  render() {
    return (
      <>
        <h1>Hi, {this.props.user.first_name}, we are happy you joined! </h1>
        <h3>Take the next step and set up your budget</h3>
        <Link to="/budget">==></Link> 
        {/* {this.state.showBudgetPage ? <BudgetPage /> : null}
        <button onClick={this.props.logOut}>Log out</button> */}
      </>
    );
  }
}

export default WelcomePage;
