import React, { Component } from "react";

import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

class ExpenseInput extends Component {
    render() {
      return (
        <div>
          
       <form>
           <input onChange={this.props.handleChange} type="text" ></input>
       </form>
        </div>
      );
    }
  }
  
  export default ExpenseInput;
  