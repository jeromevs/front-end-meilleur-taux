import React, { useState } from "react";
import { Link } from "react-router-dom";
//just a simple page to allow admin to go to the backOffice, no security
function Login() {
  const [password, setPassword] = useState("");
  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
  };
  return (
    <div className="login">
      <input
        className="login-input"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {password !== "tothemoon" && password !== "" ? (
        <div className="login-error-message">Mot de passe errone</div>
      ) : (
        <Link to="/BackOffice">
          <button className="login-button" type="submit">
            OK
          </button>
        </Link>
      )}
    </div>
  );
}
export default Login;
