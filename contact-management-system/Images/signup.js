// signup.js - Signup Page
import Image from "next/image";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement signup logic
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <Image
        src="https://user-images.githubusercontent.com/101390725/231449516-fd1704e5-0d9d-4e31-8faa-761d867d46c3.png"
        alt="Signup Page"
        width={600}
        height={400}
      />
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
