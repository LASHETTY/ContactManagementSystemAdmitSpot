// login.js - Login Page
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Image
        src="https://user-images.githubusercontent.com/101390725/231450966-93f8d65f-e5ba-4fdd-9863-83d386243f7d.png"
        alt="Login Page"
        width={600}
        height={400}
      />
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
