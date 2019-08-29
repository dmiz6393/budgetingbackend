import React, { Component } from "react";

import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

class CreateOwnBudgetForm extends Component {
  state = {
    budget: 0
  };

  submitButton = event => {
    event.preventDefault();
    this.setState({
      budget: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.props.setBudget(e, this.state.budget)}>
          <input onChange={this.submitButton} name="budget" type="text" />
          <input type="submit" />
        </form>
        <Link to= '/expenses' ><button>Next</button> </Link>
      </div>
    );
  }
}

export default CreateOwnBudgetForm;
