import React, { Component } from "react";
import BudgetDropDown from "./BudgetDropDown";

import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import PercentageForm from "./PercentageForm";

class BudgetCalculator extends Component {
  state = {
    showSaving: false,
    save: 0,
    showBudget: false,
    budget: 0
  };

  handleChange = event => {
    event.preventDefault();
    const years = event.target.older.value - event.target.age.value;
    const goal = event.target.goal.value;
    const perYear = goal / years;
    const perMonth = perYear / 12;
    this.setState({
      showSaving: true,
      save: perMonth
    });
  };

  budgetCalculator = () => {
    console.log(this.props.user.income);
    const monthlySalary = parseInt(this.props.user.income) / 12;
    console.log(monthlySalary);
    const budget = monthlySalary - parseInt(this.state.save);
    this.setState({
      showBudget: true,
      budget: Number(budget)
    });
  };

  

  render() {
    // this.budgetCalculator()
    return (
      <>
        <form onSubmit={this.handleChange}>
          <label>
            How much would you like to save?
            <input name="goal" type="text" />
          </label>
          <label>
            At what age would you like to have this saved by?
            <input name="older" type="text" />
          </label>
          <label>
            How old are you now?
            <input name="age" type="text" />
          </label>
          <input type="submit" />
        </form>
        {this.state.showSaving ? (
          <>
            <h1> You will need to save {this.state.save} a month </h1>{" "}
            <button onClick={this.budgetCalculator}>
              Calculate my budget{" "}
            </button>
          </>
        ) : null}
        {this.state.showBudget ? (
          <>
            {" "}
            <h1>
              To save this, your monthly budget should be {this.state.budget}
            </h1>{" "}
            <button onClick={(e)=>this.props.setBudget(e, this.state.budget)}>Set this as my budget</button>{" "}
            <button><Link to='/budgetform'> Create my own budget</Link>{" "}</button>
          </>
        ) : null}
      </>
    );
  }
}

export default BudgetCalculator;

//what is your savings goal?
// how old are you now?
// what age would you like to have this saved by?
//Would you like to set this as your budget? <select> <option> Yes </option> <option> No </option>  </select>
