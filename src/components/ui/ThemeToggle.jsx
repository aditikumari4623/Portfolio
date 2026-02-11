import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  // Sync theme on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;

      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return next;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        p-2 rounded-full
        bg-white/10 backdrop-blur-md
        hover:bg-white/20
        transition
      "
    >
      {dark ? (
        <Sun className="w-6 h-6 text-yellow-300" />
      ) : (
        <Moon className="w-6 h-6 text-foreground" />
      )}
    </button>
  );
};
