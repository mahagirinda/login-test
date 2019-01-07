import React, { Component } from 'react';
import './style.css';
import avatar from './avatar.png';

class App extends Component {
  render() {
    return (

      <div className="App">
      <h2>Login Form</h2>

        <form>
        <div className="imgcontainer">
          <img src={avatar} alt="Avatar" className="avatar"/>
        </div>

        <div className="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required/>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" name="remember"/> Remember me
          </label>
        </div>

        <div className="container" style={{backgroundColor:'#f1f1f1'}}>
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Forgot <a href="/forgetpass">password?</a></span>
          <br/>
          <small className="footer">@2019 mahagirinda</small>
        </div>
        </form>

      </div>
    );
  }
}

export default App;
