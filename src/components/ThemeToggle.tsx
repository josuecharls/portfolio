import { Moon, Sun } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg-elevated)",
        color: "var(--text-muted)",
      }}
      aria-label={theme === "light" ? "Dark mode" : "Light mode"}
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}
