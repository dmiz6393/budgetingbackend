import React, { Component } from "react";
import HomePageContainer from "./containers/HomePageContainer";
import API from "./adapters/API";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import HomePage from "./containers/HomePage";
import WelcomePage from "./components/WelcomePage";
import BudgetCalculator from "./components/BudgetCalculator";
import CreateOwnBudgetForm from "./components/CreateOwnBudgetForm";
import BudgetDropDown from "./components/BudgetDropDown";
import ExpenseInput from "./components/ExpenseInput";
import ProfilePage from './components/ProfilePage'

const usersUrl = "http://localhost:3000/api/v1/users";
const categoriesUrl = "http://localhost:3000/api/v1/categories";
const expensesUrl = "http://localhost:3000/api/v1/expenses";

class App extends Component {
  state = {
    user: null,
    showSignIn: false,
    showSignUp: false,
    redirect: false,
    loggedOut: false,
    categories: [],
    showCostDropDown: false
  };

  componentDidMount() {
    API.validateUser().then(user => {
      if (user.user) {
        this.setState({
          user: {
            email: user.email,
            user_id: user.id,
            income: user.income,
            first_name: user.first_name
          }
        });
      }
    });
  }

  submitSignUp = user => {
    API.signUpUser(user).then(user => {
      this.setState({
        user: {
          email: user.email,
          user_id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          income: user.income
        },
        redirect: true
      });
    });
  };

  submitSignIn = user => {
    API.signInUser(user).then(user =>
      this.setState({
        user: {
          first_name: user.first_name,
          email: user.email,
          user_id: user.id,
          income: user.income
        },
        redirect: true
        //pushState()
      })
    );
  };

  fetchUserInfo=()=>{
  fetch(usersUrl + "/" + `${this.state.user.user_id}`)
  .then(response => response.json()).then(res=>console.log(res)) // parses JSON response into native JavaScript objects 
}

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/welcome" />;
    }
  };
  renderLogOut = () => {
    if (this.state.loggedOut) return <Redirect to="/" />;
  };

  logOut = () => {
    API.clearToken();
    this.props.history.push(`/`);
  };

  showSigninClick = () => {
    this.setState({
      showSignIn: !this.state.showSignIn
    });
  };

  showSignUpClick = () => {
    this.setState({
      showSignUp: !this.state.showSignUp
    });
  };

  setBudget = (e, budget) => {
    e.preventDefault();
    fetch(usersUrl + "/" + `${this.state.user.user_id}`, {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify({ budget: budget }) // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native JavaScript objects
  };

  handleSubmitCategory = (event, value) => {
    event.preventDefault();
    fetch(categoriesUrl, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name: value,
        user_id: this.state.user.user_id
      }) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(res =>
        this.setState({
          categories: [...this.state.categories, res],
          showCostDropDown: true
        })
      ); // parses JSON response into native JavaScript objects
  };

  handleOwnSubmitCategory = event => {
    event.preventDefault();
    fetch(categoriesUrl, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name: event.target.expense.value,
        user_id: this.state.user.user_id
      }) // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native JavaScript objects
  };

  setCategoryCost = (e, category) => {
    e.preventDefault();
    fetch(expensesUrl, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        amount: e.target.cost.value,
        category_id: category.id
      }) // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses JSON response into native JavaScript objects
  };

  render() {
    return (
      <div className="App">
        {this.renderRedirect()}
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              submitSignIn={this.submitSignIn}
              submitSignUp={this.submitSignUp}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={() => (
            <SignUpForm
              submitSignUp={this.submitSignUp}
              goBackHandler={this.goBackHandler}
            />
          )}
        />
        <Route
          exact
          path="/signin"
          render={() => <SignInForm submitSignIn={this.submitSignIn} />}
        />
        <Route
          exact
          path="/welcome"
          render={() => (
            <WelcomePage logOut={this.logOut} user={this.state.user} />
          )}
        />
        <Route
          exact
          path="/budget"
          render={() => (
            <BudgetCalculator
              setBudget={this.setBudget}
              logOut={this.logOut}
              user={this.state.user}
            />
          )}
        />

        <Route
          exact
          path="/budgetform"
          render={() => (
            <CreateOwnBudgetForm
              setBudget={this.setBudget}
              logOut={this.logOut}
              user={this.state.user}
            />
          )}
        />

        <Route
          exact
          path="/expenses"
          render={() => (
            <BudgetDropDown
              handleOwnSubmitCategory={this.handleOwnSubmitCategory}
              handleSubmitCategory={this.handleSubmitCategory}
              categories={this.state.categories}
              showCostDropDown={this.state.showCostDropDown}
              setCategoryCost={this.setCategoryCost}
              fetchUserInfo={this.fetchUserInfo}
            />
          )}
        />

        <Route
          exact
          path="/profile"
          render={() => (
            <ProfilePage fetchUserInfo={this.fetchUserInfo}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
