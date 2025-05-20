"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
});

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`bg-background/90 fade-in fixed top-0 right-0 left-0 z-[100] flex items-center justify-between border-b px-46 py-4 shadow-md backdrop-blur-md`}
    >
      {/* Wrap your styled div in Link without changing the div styles */}
      <Link href="/" className="hover:text-primary transition-colors">
        <div
          className={`bg-gradient-to-r from-indigo-800 via-purple-700 to-gray-900 bg-clip-text text-3xl font-bold text-transparent ${dancingScript.className}`}
        >
          DanielOsibodu
        </div>
      </Link>

      <div className={`flex gap-6 ${dancingScript.className}`}>
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

      <ModeToggle />
    </nav>
  );
}
