// components/Footer.tsx
import Link from "next/link";
import React from "react"; // React is implicitly imported for JSX, but good practice to explicitly import
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
});

const Footer: React.FC = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center py-8">
      {/* Your Name/Brand Link with Gradient */}
      <Link href="/" className="hover:text-primary mb-2 transition-colors">
        {" "}
        {/* Added mb-2 for spacing */}
        <div
          className={`bg-gradient-to-r from-indigo-800 via-purple-700 to-gray-900 bg-clip-text text-3xl font-bold text-transparent ${dancingScript.className} mb-3`}
        >
          DanielOsibodu
        </div>
      </Link>

      {/* Copyright Text */}
      <p className="text-sm">
        {" "}
        {/* text-sm for a standard copyright size */}
        &copy; {new Date().getFullYear()} Daniel Osibodu, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
