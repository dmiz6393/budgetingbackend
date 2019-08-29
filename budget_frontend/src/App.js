import React, { Component } from "react";
import HomePageContainer from "./containers/HomePageContainer";
import API from "./adapters/API";
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
import BudgetDropDown from './components/BudgetDropDown'
import ExpenseInput from './components/ExpenseInput'
const usersUrl = "http://localhost:3000/api/v1/users";
const categoriesUrl="http://localhost:3000/api/v1/categories"

class App extends Component {
  state = {
    user: null,
    showSignIn: false,
    showSignUp: false,
    redirect: false,
    loggedOut: false
  };

  componentDidMount() {
    API.validateUser().then(user => {
      if (user.user) {
        this.setState({
          user: {
            email: user.user.data.attributes.email,
            user_id: user.user.data.attributes.id,
            income: user.user.data.attributes.income,
            first_name: user.user.data.attributes.first_name
          }
        });
      }
    });
  }

  submitSignUp = user => {
    API.signUpUser(user).then(user => {
      this.setState({
        user: {
          email: user.data.attributes.email,
          user_id: user.data.attributes.id,
          first_name: user.data.attributes.first_name,
          last_name: user.data.attributes.last_name,
          income: user.data.attributes.income
        },
        redirect: true
      });
    });
  };

  submitSignIn = user => {
    API.signInUser(user).then(user =>
      this.setState({
        user: {
          first_name: user.data.attributes.first_name,
          email: user.data.attributes.email,
          user_id: user.data.attributes.id,
          income: user.data.attributes.income
        },
        redirect: true
        //pushState()
      })
    );
  };

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

  handleSubmitCategory= (event, value) =>{
    event.preventDefault()
    debugger
    fetch(categoriesUrl, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name: value, 
        user_id: this.state.user.user_id 
      }), // body data type must match "Content-Type" header
  })
  .then(response => response.json()); // parses JSON response into native JavaScript objects 
}
    


handleOwnSubmitCategory= (event) =>{
  event.preventDefault()  
  fetch(categoriesUrl, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      name: event.target.expense.value, 
      user_id: this.state.user.user_id 
    }), // body data type must match "Content-Type" header
})
.then(response => response.json()); // parses JSON response into native JavaScript objects 
}

  render() {
    return (
      <>
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

        <Route exact path="/expenses" render={() => <BudgetDropDown handleOwnSubmitCategory={this.handleOwnSubmitCategory}handleSubmitCategory={this.handleSubmitCategory} />} />
      </>
    );
  }
}

export default withRouter(App);
