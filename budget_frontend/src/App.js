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
import BudgetPage from "./components/BudgetPage";

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
            user_id: user.user.data.attributes.id
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
          user_id: user.data.attributes.id
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

  render() {
    return (
      <>
        {this.renderRedirect()}
        {this.renderLogOut()}
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
            <BudgetPage logOut={this.logOut} user={this.state.user} />
          )}
        />
        }
      </>
    );
  }
}

export default withRouter(App);

{
  /* // import React, { Component } from "react";
// import "./App.css";
// import { BrowserRouter as Route, withRouter } from "react-router-dom";
// import FormsContainer from "./containers/FormsContainer";
// import API from "./adapters/API";

// class App extends Component { */
}
//   state = {
//     user: { email: null, id: null, first_name:null, last_name:null, income:0 },
//   };

//   componentDidMount() {
//     API.validateUser().then(user => {
//       if (user.user) {
//         this.setState({
//           user: {
//             email: user.user.data.attributes.email,
//             user_id: user.user.data.attributes.id
//           }
//         });
//       }
//     });
//   }

//   submitSignUp = user => {
//     API.signUpUser(user).then(user => {
//       this.setState({
//         user: {
//          email: user.data.attributes.email,
//          user_id: user.data.attributes.id,
//          first_name: user.data.attributes.first_name,
//          last_name: user.data.attributes.last_name,
//          income: user.data.attributes.income
//         }
//       });
//     });
//   };

//   submitSignIn = user => {
//     API.signInUser(user).then(user =>
//       this.setState({
//         user: {
//           email: user.data.attributes.email,
//           user_id: user.data.attributes.id
//         }
//       })
//     );
//   };

//   logOut = () => {
//     API.clearToken();
//     this.setState({ user: null});
//   };

//   render() {
//     return (
//       <React.Fragment>
//           <FormsContainer
//             submitSignUp={this.submitSignUp}
//             submitSignIn={this.submitSignIn}
//           />

//       </React.Fragment>
//     );
//   }

// }

// export default withRouter(App);

{
  /* <Router>
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

          <Route exact path="/welcome" render={() => <WelcomePage logOut={this.logOut} user={this.state.user}/>} />
        </Router>
      </> */
}
