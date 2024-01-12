import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
      <h2 >Welcome back!</h2>
      <p>Please enter your details.</p>
      <form>
        <input type="email" name="email" placeholder="Your email address" />
        <input type="password" name="password" placeholder="Your password" />
        <button type="submit">Sign in</button>
      </form>
      <div className="options">
        <a href="#">Forgot password?</a>
        <a href="#">Sign in with Google</a>
        <a href="#">Don't have an account? Sign up</a>
      </div>
    </div>
    );
};

export default Login;