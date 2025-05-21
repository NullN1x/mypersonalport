"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Assuming this is your utility for conditional classnames
import { ModeToggle } from "./mode-toggle"; // Your dark mode toggle
import { Dancing_Script } from "next/font/google";
import { useState } from "react"; // Import useState for managing menu state
import { Menu, X } from "lucide-react"; // Import icons for hamburger and close

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
});

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  // Define your navigation links
  const links = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-background/90 fixed top-0 right-0 left-0 z-[100] border-b shadow-md backdrop-blur-md">
      {/* Top Row: Logo, Desktop Links, Mobile Controls */}
      <div className="flex items-center justify-between px-4 py-4">
        {/* Brand/Logo (DanielOsibodu) */}
        <Link href="/" className="hover:text-primary transition-colors">
          <div
            className={`bg-gradient-to-r from-indigo-800 via-purple-700 to-gray-900 bg-clip-text text-3xl font-bold text-transparent ${dancingScript.className}`}
          >
            DanielOsibodu
          </div>
        </Link>

        {/* Desktop Navigation Links (Hidden on small screens) */}
        <div className={`hidden gap-6 md:flex ${dancingScript.className}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hover:text-primary text-lg transition-colors",
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle & ModeToggle (Visible on small screens) */}
        <div className="flex items-center gap-x-3 md:hidden">
          {" "}
          {/* Only visible on small screens */}
          <ModeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:ring-primary rounded-md p-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Dark Mode Toggle (Hidden on small screens) */}
        <div className="hidden md:block">
          {" "}
          {/* Only visible on desktop */}
          <ModeToggle />
        </div>
      </div>

      {/* Collapsible Mobile Navigation Links (Expands/Collapses below the top row) */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "max-h-screen border-t py-4" : "max-h-0", // max-h-screen allows content to fully show; border-t adds a subtle separator
        )}
      >
        <nav
          className={`flex flex-col items-center gap-4 ${dancingScript.className}`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // Close menu when a link is clicked, for smooth navigation on mobile
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "hover:text-primary text-lg transition-colors",
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-foreground", // Using text-foreground for better general contrast
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
}
