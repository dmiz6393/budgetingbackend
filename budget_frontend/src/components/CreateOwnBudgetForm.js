import React, { Component } from "react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { Dropdown, Button } from "semantic-ui-react";

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
          <input onChange={this.submitButton} name="budget" type="number" />
          <input type="submit" />
        </form>
       

        <Button onClick={this.props.fetchUserInfo}>
            Done for now 
          </Button>
          <Link to= '/expenses' ><button>Expenses</button> </Link>
        <Link to ="/profile">
          <Button>
            Next
          </Button>
          </Link>

      </div>
      
    );
  }
}

export default CreateOwnBudgetForm;



