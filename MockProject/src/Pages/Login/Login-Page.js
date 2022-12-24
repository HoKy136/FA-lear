import { useState } from "react";
import CustomInput from "../../Component/Input/Custom-input";
import { useNavigate } from 'react-router-dom';

import "./style.css";
function LoginPage() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  let navigate = useNavigate();
  // User Login info
  const database = [
    {
      username: "aaa",
      password: "aaa123"
    },
    {
      username: "bbb",
      password: "bbb123"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  //  login form
  const renderForm = (
    <div >
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <CustomInput lable = 'Username'
                        type = 'text'
                        name = 'uname'/>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
        <CustomInput lable = 'Password'
                        type = 'password'
                        name = 'pass'/>

          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value = "Login"/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="flex items-center justify-center my-16">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? navigate('/products') : renderForm}
      </div>
    </div>
  );
}
export default LoginPage;