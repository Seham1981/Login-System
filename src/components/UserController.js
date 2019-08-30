import axios from 'axios';
/** we create two functional react components, one to to register and one to login the user
 * they do not contain any state and thats why we create them as stateless components
 * we are going to talk to the back end routes using axios.
 */
export const register = (newUser) => {
    return axios.post('/users/register', {
        username: newUser.username,
        password: newUser.password,
        email: newUser.email
    }).then(res => {
        //res.send('user registered');
        console.log("New user registered!")
    })
} 

/** we use the Localstorage.setItem to create a token when the user login to the system
 * this token will be called with the Localstorgae.getItem()
 */
export const login = (user) => {
    return axios.post('/users/login', {
        email: user.email,
        password: user.password
    })
        .then(res => {
            localStorage.setItem('userToken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err);
    })
 }
