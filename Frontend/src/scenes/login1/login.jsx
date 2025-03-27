import { useState } from "react";
import "./login.css"; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={{ color: "white" }}
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="off"  // Prevent autofill issues
          />

          <input
            style={{ color: "white" }}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="off"
          />

          <button type="submit" disabled={!username || !password}>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;