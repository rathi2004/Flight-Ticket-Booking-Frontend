import React, { useState } from "react";
import {Navigate } from 'react-router-dom'; 
import { Link } from "react-router-dom";

import "./login.css";

function Form() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    },
	  {
	  username: "user3",
      password: "pass3"
	  }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => 
  {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    if (userData)
	  {
      if (userData.password !== pass.value)
      {
        setErrorMessages({ name: "pass", message: errors.pass });
      }
      else
      {
        setIsSubmitted(true);
      }
    } 
    else 
    {
      setErrorMessages({ name: "uname", message: errors.uname });
    }

  };
  const renderErrorMessage = (name) =>name === errorMessages.name && (<div className="error">{errorMessages.message}</div>);
  const renderForm = (
    <div className="form">
      <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label for="un">Username </label>
          <input type="text" name="uname" required id="un" />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label for="ps">Password </label>
          <input type="password" name="pass" required id="ps"/>
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container" style={{alignItems:'center'}}>
          <button id="btn" style={{backgroundColor:"skyblue"}}>Log in</button>
          <p id="rem">If you have an account log in here</p>
        <Link to="/Forget" style={{marginLeft:"35%"}}>Forget password</Link>
       </div>
      </form>
      </div>
    </div>
  );
  
  return (
	  <div className="app">
      <div className="leftside">
        <p id="journey">Life Is The Journey</p>
        <p id="flight">Enjoy The Flight</p>
        <button id="account"style={{backgroundColor:"skyblue"}}><Link id="ca" to="/Signup">Create Account</Link></button>
        <p style={{paddingLeft:"32%"}}>New user</p>
      </div>
		  <div className="quote">
			  <p id="dragon">Dragon Air</p>
			  <h2>Good To See You Again</h2>
      </div>
      {isSubmitted ? <Navigate to="/Home" />: renderForm}
       
     
    </div>
  );
}

export default Form;