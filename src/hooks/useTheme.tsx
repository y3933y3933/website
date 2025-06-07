import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setThemeState] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    const isDark = theme === "dark";

    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  function toggleTheme() {
    setThemeState(theme === "light" ? "dark" : "light");
  }

  return { toggleTheme };
}
