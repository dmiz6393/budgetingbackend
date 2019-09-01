import React, { Component } from "react";

class CategoryCard extends Component {
 
  getExpenses = () => {
    if (
      this.props.category.expenses.length !== 0 ||
      this.props.category.expenses[0] == undefined
    ) {
      return this.props.category.expenses[0].amount;
    } else {
      return 0;
    }
  };

  render() {
    return (
      <div>
        Category: {this.props.category.name}{" "}
        Expenses: {this.getExpenses()}
        {/* <button onClick={this.props.addToExpenses}> Add to this expense</button>

        {this.props.addToExpense ? (
          <div>
          <form>
            {" "}
            <input type="number"></input> <input type="submit"> + </input>{" "}
          </form>
          </div>
        ) : null} */}
      </div>
    );
  }
}

export default CategoryCard;

//patch request and add whatever their input is
