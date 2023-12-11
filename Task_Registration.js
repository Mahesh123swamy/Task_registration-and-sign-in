import React, { Component } from 'react';
import './Style.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleRegister = () => {
   
    localStorage.setItem('user', JSON.stringify({ username: this.state.username, password: this.state.password }));
    this.setState({ loggedIn: true });
  };

  handleLogin = () => {
   
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { username, password } = JSON.parse(storedUser);
      if (this.state.username === username && this.state.password === password) {
        this.setState({ loggedIn: true });
      }
    }
  };

  handleLogout = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    return (
      <div className="app">
        {this.state.loggedIn ? (
          <div>
            <h1>Welcome, {this.state.username}!</h1>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>User Registration and Sign In</h1>
            <label>
              Username:
              <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
            </label>
        <br></br>
          <br></br>
            <label>
              Password:
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </label>
            <br></br>
            <br></br>
           
            <div className='buttons'>
              <button onClick={this.handleRegister}>Register    </button>
              <button onClick={this.handleLogin}>Login</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Register;