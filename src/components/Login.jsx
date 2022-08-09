import React from "react";
import Logo from "../images/logo.svg";

function Login() {
  return (
    <div className="container login-container ">
      <div className="login-body">
        <img src={Logo} alt="" />
        <hr />
        <p>Please login to your Account</p>

        <form className="login-form">
          <input class="user" type="text" placeholder="Username" />
          <input className="pass" type="password" placeholder="Password" />
          <div className="submit-container">
            <div>
              <input type="checkbox" name="remember" />
              <label for="remember"> Remember me</label>
            </div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
   <span className="forget-pass"><p>Forget your password? <a href="#">Click hear</a></p></span> 
     
    </div>
  );
}

export default Login;
