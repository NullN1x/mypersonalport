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
    { href: "/about", label: "About" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b px-46 py-4 shadow-sm">
      <div
        className={`bg-gradient-to-r from-indigo-800 via-purple-700 to-gray-900 bg-clip-text text-3xl font-bold text-transparent ${dancingScript.className}`}
      >
        DanielOsibodu
      </div>

      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "hover:text-primary text-sm transition-colors",
              pathname === link.href
                ? "text-primary font-medium"
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
