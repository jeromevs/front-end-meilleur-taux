import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      {password === "tothemoon" ? (
        <Link to="/BackOffice">
          <button className="login-button" type="submit">
            OK
          </button>
        </Link>
      ) : (
        <div className="login-error-message">Mot de passe errone</div>
      )}
    </div>
  );
}
export default Login;
