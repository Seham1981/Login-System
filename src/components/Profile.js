import React from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends React.Component {
    state = {
        username: '',
        email:''
    }
/** we get the token that we have created in the contoller with LocalStorage.setItem() */
    componentDidMount() {
        const token = localStorage.userToken;
        const decoded = jwt_decode(token);
        this.setState({
            username: decoded.username,
            email: decoded.email
        })
    }
    render() { 
        return ( 
            <div className="container">
                <div className="col-sm-8 mx-auto">
                   <h2 className="text-center">Your Profile </h2>
                </div>
                <table className="table col-md-6 mx-auto">
                   <tbody>
                        <tr>
                            <td>Username</td>
                            <td>{this.state.username}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                        </tr>
                   </tbody>
                </table>
            </div>

         );
    }
}
 
export default Profile;