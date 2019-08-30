import React, { Component } from "react";
import BudgetPage from "./BudgetPage";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";

class WelcomePage extends Component {
  state = {
    showBudgetPage: false
  };

  showBudgetPage = () => {
    this.setState({
      showBudgetPage: true
    });
  };

  render() {
    return (
      <>
        <h1>Hi, {this.props.user.first_name}, we are happy you joined! </h1>
        <h3>Take the next step and set up your budget</h3>
        <Link  to="/budget"> <div> <Icon className="angle double right icon huge inverted"></Icon> </div></Link> 
        <Button onClick={this.props.logOut}>Log out</Button> 
      </>
    );
  }
}

export default WelcomePage;





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