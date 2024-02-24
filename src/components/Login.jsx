import React from "react";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div style={{ backgroundColor: "#d3f0e9", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "400px", padding: "2rem", borderRadius: "5px", backgroundColor: "#fff" }}>
        <h2 style={{ color: "#008000", textAlign: "center", marginBottom: "1rem" }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email" style={{ marginBottom: "0.5rem" }}>Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ marginBottom: "1rem", padding: "0.5rem", borderRadius: "3px", border: "1px solid #ccc" }} />
          <label htmlFor="password" style={{ marginBottom: "0.5rem" }}>Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ marginBottom: "1rem", padding: "0.5rem", borderRadius: "3px", border: "1px solid #ccc" }} />
          <button type="submit" style={{ backgroundColor: "#008000", color: "#fff", padding: "1rem 2rem", borderRadius: "5px", border: "none", cursor: "pointer" }}>Login</button>
        </form>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
