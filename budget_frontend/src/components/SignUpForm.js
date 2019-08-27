import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    first_name: "", 
    last_name: "", 
    income: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitSignUp(this.state);
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <Form onSubmit={e => this.handleSubmit(e)} v>
          <Form.Field required>
            <label>Email:</label>
            <input
              type="text"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
          </Form.Field>
          <Form.Field required>
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
          </Form.Field>

          <Form.Field required>
            <label>First Name:</label>
            <input
              type="text"
              placeholder="first name"
            //   value={this.state.first_name}
              onChange={this.handleChange}
              name="first_name"
            />
          </Form.Field>

          <Form.Field required>
            <label>Last Name:</label>
            <input
              type="text"
              placeholder="last name"
            //   value={this.state.last_name}
              onChange={this.handleChange}
              name="last_name"
            />
          </Form.Field>

          <Form.Field required>
            <label>Income:</label>
            <input
              type="text"
              placeholder="income"
              value={this.state.income}
              onChange={this.handleChange}
              name="income"
            />
          </Form.Field>

          <Button type="submit" fluid>sign up</Button>
        </Form>
      </div>
    );
  }
}

export default SignUpForm;
