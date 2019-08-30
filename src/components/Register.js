import React from 'react';
import { register } from './UserController';

class Register extends React.Component {
    
    state = {
        username:'',
        password: '',
        email:''
    }
    /** by making arrow functions, we do not need to use the constructor to bind these methods */
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    onSubmit = event => {
        event.preventDefault();
        /**we create new user object with email and password to submit the details */
        const newUser = {
            username:this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        register(newUser).then(res => {
                 this.props.history.push(`/login`)
        })
    }
 render() { 
      return ( 
        <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
        
  );
    }
}
 
export default Register;