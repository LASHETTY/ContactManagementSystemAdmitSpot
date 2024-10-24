// index.js - Home Page
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Contact Management System</h1>
      <Image
        src="https://user-images.githubusercontent.com/101390725/231448478-e5a6fd58-d850-427a-8f0e-ac475e62d897.png"
        alt="CMS Home Page"
        width={600}
        height={400}
      />
      <p>Your comprehensive solution to manage contacts efficiently.</p>
    </div>
  );
}
