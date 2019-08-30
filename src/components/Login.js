import React from 'react';
import { login } from './UserController';

class Login extends React.Component {
/**we store the user login details in the local state of the class */
    
    state = {
        email: '',
        password:''
    }
    /** by making arrow functions, we do not need to use the constructor to bind these methods */
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = event => {
        event.preventDefault();
        /**we create new user object with email and password to submit the details */
        const user = {
            email: this.state.email,
            password: this.state.password  
        }
        /**we then call the login method that takes a user object */
        login(user).then(res => {
            if (res) {
                 this.props.history.push(`/profile`)
             }
         })
    }
    
    render() { 
        return ( 
            <div className="container">
             <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                  </div>
                  <button
                        type="submit"
                        className="btn btn-lg btn-primary btn-block"
                  >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
        );
    }
}
 
export default Login;