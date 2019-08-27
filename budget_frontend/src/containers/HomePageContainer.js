import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import HomePage from "./HomePage";
import API from "../adapters/API";
import WelcomePage from '../components/WelcomePage'
class HomePageContainer extends Component {

  render() {
    return (
      <>
        {/* {this.props.user !== null ? (() =>  {
          return window.location = '/welcome';
        }) 
        : (() =>  window.location = '/')}
        */}
            
</>
  
    );
  }
}

export default HomePageContainer;
