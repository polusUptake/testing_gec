import { useState } from "react";
import "./reg.css"; // Import the CSS file

const Register = () => {  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); /

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Submit form data (e.g., send to backend)
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>REGISTER</h2>  
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">REGISTER</button> 
      </div>
    </div>
  );
};

export default Register; 