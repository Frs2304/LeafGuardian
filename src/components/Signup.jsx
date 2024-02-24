import React from "react";

function Signup() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic here
  };

  return (
    <div style={{ backgroundColor: "#d3f0e9", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div style={{ maxWidth: "400px", width: "80%", padding: "2rem", borderRadius: "5px", backgroundColor: "#fff" }}>
      <h2 style={{ color: "#008000", textAlign: "center" }}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name" style={{ marginBottom: "0.5rem" }}>Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required style={{ marginBottom: "1rem", padding: "0.5rem", borderRadius: "3px", border: "1px solid #ccc" }} />
        <label htmlFor="email" style={{ marginBottom: "0.5rem" }}>Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ marginBottom: "1rem", padding: "0.5rem", borderRadius: "3px", border: "1px solid #ccc" }} />
        <label htmlFor="password" style={{ marginBottom: "0.5rem" }}>Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ marginBottom: "1rem", padding: "0.5rem", borderRadius: "3px", border: "1px solid #ccc" }} />
        <button type="submit" style={{ backgroundColor: "#008000", color: "#fff", padding: "1rem 2rem", borderRadius: "5px", marginTop: "1rem", border: "none", cursor: "pointer" }}>Create Account</button>
      </form>
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        Already have an account? <a href="/login">Log In</a>
      </p>
    </div>
  </div>
  );
}

export default Signup;
