import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// function getInitialTheme() {
//   if (typeof localStorage !== "undefined") {
//     const storageTheme = localStorage.getItem("theme");
//     if (storageTheme !== "light" && storageTheme !== "dark") return "light";

//     return localStorage.getItem("theme");
//   }
//   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     return "dark";
//   }
//   return "light";
// }

export default function ThemeToggle() {
  // const [theme, setTheme] = useState(getInitialTheme());

  // function toggleTheme() {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   localStorage.setItem("theme", newTheme);
  //   setTheme(newTheme);
  // }

  // useEffect(() => {
  //   applyTheme();
  // }, [theme]);

  // function applyTheme() {
  //   const root = document.documentElement;
  //   if (theme === "light") {
  //     root.classList.remove("dark");
  //   } else {
  //     root.classList.add("dark");
  //   }
  // }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-9 w-9 px-0"
      // onClick={toggleTheme}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
