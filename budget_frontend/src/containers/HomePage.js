import React, { Component } from "react";

import { Form, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";


class HomePage extends Component {
    
    

    render(){
        return(
        <>

        <h1>Budgey</h1>
        {/* <button onClick={this.props.showSigninClick}> Sign in</button>
        <button onClick={this.props.showSignUpClick}>Sign Up</button> */}
        <button onClick={() =>  window.location = '/signin'} >Sign In</button>
        <button onClick={() =>  window.location = '/signup'} >Sign Up</button>
        </>
        )
    }

}


export default HomePage