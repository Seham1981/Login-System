import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NarBar extends React.Component {

  logOut = (event) => {
        event.preventDefault()
        localStorage.removeItem('userToken')
        this.props.history.push(`/`)
      }
 
    render() { 
        const loginRegisterLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                       Register
                    </Link>
                </li>
            </ul>
        )
        const profileLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Registerd User
                    </Link>
                </li>
                <li className="nav-item">
                  <a href="" onClick={this.logOut} className="nav-link">
                   Logout
                  </a>
                </li>
            </ul>
        )
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.userToken ? profileLink : loginRegisterLink}
        </div>
      </nav>
        )
    }
}
 
export default withRouter(NarBar);