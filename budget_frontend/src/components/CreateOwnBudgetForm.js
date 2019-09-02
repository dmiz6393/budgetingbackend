import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

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
         <Button><input type="submit" /></Button> 
        </form>
          <Link to= '/profile' ><Button> My profile</Button> </Link>
          <Link to= '/expenses' ><Button> My expenses</Button> </Link>
      </div>
      
    );
  }
}

export default CreateOwnBudgetForm;



