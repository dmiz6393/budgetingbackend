import React, { Component } from "react";

import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

class EditIncome extends Component {
//   state = {
//     income: 0
//   };

//   submitButton = event => {
//     event.preventDefault();
//     this.setState({
//       income: event.target.value
//     });
//   };

  render() {
    return (
      <div>
        <form onSubmit={this.props.updateIncome}>
          <input name="income" type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default EditIncome;
