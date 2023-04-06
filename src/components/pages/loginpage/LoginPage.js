import React, { useState } from 'react';
import Logo from './images/Mask group.png';
import Eye from './images/Eye.png';
// import Asterisk from './images/Asterisk.png';
import classes from '../signuppage/SignUp.module.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const handleSubmit = () => {

  // };

  return (
    <div>
      <header id={classes.logInFormHeader}>
        <img id={classes.logInLogoImg} src={Logo}></img>
        <h1 id={classes.citroneTextHeader}>citrone</h1>
      </header>
      <form id={classes.logInForm}>
        <h1 id={classes.logInHeader}>Log into your account</h1>
        <div id={classes.greetingDiv}>
          <h1 id={classes.greetingHeader}>
            <span id={classes.congratulations}>Congratulations!</span> Your account has been
            successfully created. You may log in now.
          </h1>
        </div>
        <div className={classes['loginform-Content']}>
          <div className={classes.emailPasswordContainer}>
            <div className={classes.email}>
              <label id={classes.emailLabelForLogin} htmlFor="Email">
                Email Address
              </label>{' '}
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes.loginPassword}>
              <div className={classes.passwordLabelsForLogin}>
                <label id={classes.passwordLabelForLogin} htmlFor="password">
                  Password
                </label>{' '}
                <Link id={classes.forgotPassword} to="/PasswordPage">
                  Forgot your password?
                </Link>{' '}
                <br />
              </div>
              <input
                id={classes.password}
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className={classes.showPassword}>
                <img id={classes.changePasswordEye} src={Eye}></img>
                <br />
                <br />
              </i>
              <input
                id={classes.checkbox}
                style={{
                  marginLeft: '35px',
                  border: '1px solid red',
                  width: '17px',
                  height: '16px'
                }}
                type="checkbox"></input>
              <label
                style={{
                  marginLeft: '5px',
                  border: '1px solid red',
                  fontSize: '16px'
                }}
                htmlFor="radio">
                Remember me
              </label>
            </div>
          </div>
          <button className={classes.loginBtn}>Log In</button>
          <p id={classes.lastPara}>
            Don&#39;t have an account?{' '}
            <Link className={classes.signUpLink} to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;