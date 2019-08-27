import React, { Component } from "react";

class CategoryDropDown extends Component {
  render() {
    return (
<>
        <select>
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
          <button> Add a category </button>
        </select>
     
   </>
   
    );
  }
}

export default CategoryDropDown;
