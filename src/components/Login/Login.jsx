import React, { useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        form.reset();

      })
      .catch(error => {
        console.log(error.message);
      })
  }
  return (
    <div className="login-container">
      <h2 >Welcome back!</h2>
      <p>Please enter your details.</p>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" id='' placeholder="Your email address" />
        <input type="password" name="password" id='' placeholder="Your password" />
        <button type="submit">Sign in</button>
      </form>
      <div className="options">
        <a href="#">Forgot password?</a>
        <a href="#">Sign in with Google</a>
        <a href="#">Don't have an account? Sign up</a>
      </div>
      <p ><small>New to Ema_john? <Link to="/SignUp">SignUp</Link></small></p>
    </div>
  );
};

export default Login;