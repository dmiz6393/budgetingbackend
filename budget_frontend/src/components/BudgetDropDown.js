import React, { Component } from "react";
import Transactions from "./Transactions";
import { Link } from "react-router-dom";
import {Button } from "semantic-ui-react";

class CategoryDropDown extends Component {
  state = {
    value: "Education",
    showNext: false
  };

  // shouldComponentUpdate(nextProps, nextState)

  componentDidMount(){
    this.setState({
    value: "Education",
    showNext: false
    })
  }

  componentWillUnmount(){}


  handleChange = event => {
    event.preventDefault();
    this.setState({
      value: event.target.value
    });
  };

  showNextBtn=()=>{
this.setState({
  showNext: !this.state.showNext
})
  }

  render() {
    const trans = this.props.categories.map(category => {
      return (
        <Transactions
          setCategoryCost={this.props.setCategoryCost}
          category={category}
        />
      );
    });

    return (
      <>
        <h1>
          Add your expenses. How much of each category have you spent
          this month?
        </h1>
        <form
          onSubmit={
            this.state.value !== "Add"
              ? event =>
                  this.props.handleSubmitCategory(event, this.state.value)
              : null
          }
        >
          <select
            class="select-css"
            value={this.state.value}
            onChange={this.handleChange}
          >
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
              <input name="expense" type="text"></input>
              <input type="submit" value="Submit" />
            </form>
          ) : (
            <Button>
              {" "}
              <input type="submit" value="Add" />{" "}
            </Button>
          )}
        </form>

        {this.props.showCostDropDown ? trans : null}
        <div>
          <Button onClick={this.props.fetchUserInfo}>
            <h5 onClick={this.showNextBtn}>Done for now </h5>
          </Button>
{this.state.showNext ? 
        <Link to ="/profile">
          <Button >
            Next
          </Button>
          </Link> :null 
          }
        </div>
      </>
    );
  }
}

export default CategoryDropDown;
