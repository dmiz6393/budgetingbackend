import React, { Component } from "react";
import BudgetDropDown from "./BudgetDropDown";

import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import PercentageForm from "./PercentageForm";

class BudgetCalculator extends Component {
  render() {
    return (
      <div>
        <h2>
          What percentage of your monthly income would you like to save every
          month?
        </h2>
        <BudgetDropDown />
        <PercentageForm />
      </div>
    );
  }
}

export default BudgetCalculator;
