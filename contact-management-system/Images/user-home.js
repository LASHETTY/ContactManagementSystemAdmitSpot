// user-home.js - User's Home Page
import Image from "next/image";

export default function UserHome() {
  return (
    <div>
      <h1>User Home Page</h1>
      <Image
        src="https://user-images.githubusercontent.com/101390725/231452887-927a0f6b-2a0e-4c72-8352-012cdb842699.png"
        alt="User's Home Page"
        width={600}
        height={400}
      />
      {/* Add other user home page functionalities */}
    </div>
  );
}
