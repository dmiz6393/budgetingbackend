import React, { Component } from "react";

import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

class Transactions extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.category.name}</h2>
        <form
          onSubmit={(e)=>this.props.setCategoryCost(e, this.props.category)}
        >
          <input name="cost" type="text" placeholder="cost"></input>
          <input type="submit"/> 
        </form>
      </div>
    );
  }
}

export default Transactions;
