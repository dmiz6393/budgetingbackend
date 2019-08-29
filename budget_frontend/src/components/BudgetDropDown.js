import React, { Component } from "react";
import ExpenseInput from "./ExpenseInput";

class CategoryDropDown extends Component {
  state = {
    value: "Education",
    showForm: true
  };

  handleChange = event => {
    event.preventDefault();
      this.setState({
        value: event.target.value
      });
    }
  

  render() {
    return (
      <>
        <h1>Select from the dropdown or add your own category</h1>
        <form
          onSubmit={event =>
            this.props.handleSubmitCategory(event, this.state.value)
          }
        >
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Transport"> Auto and Transport </option>
            <option value="Bills and Utilities">Bills and Utilities </option>
            <option value="Education"> Education </option>
            <option value="Entertainment"> Entertainment </option>
            <option value="Insurance"> Insurance </option>
            <option value="Food"> Food </option>
            <option value="Gifts"> Gifts </option>
            <option value="Fitness"> Health and Fitness </option>
            <option value="Loans"> Loans</option>
            <option value="Home"> Home </option>
            <option value="Travel"> Travel </option>
            <option value="Add"> Add my own </option>
          </select>
          {this.state.value === "Add" ? (
            <form onSubmit={this.props.handleOwnSubmitCategory}>
            <input name="expense" type="text" ></input>
            <input type="submit" value="Submit" />
        </form>
          ) :  <input type="submit" value="Submit" />}
         
        </form>
      </>
    );
  }
}

export default CategoryDropDown;
