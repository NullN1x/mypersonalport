"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="cursor-pointer"
      >
        <Sun
          className={`h-[1.2rem] w-[1.2rem] transition-all ${
            theme === "dark" ? "scale-0" : "scale-100"
          }`}
        />
        <Moon
          className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
            theme === "dark" ? "scale-100" : "scale-0"
          }`}
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
