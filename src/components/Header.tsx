import { useTranslation } from "react-i18next"
import { profile } from "../data/profile"
import { LanguageToggle } from "./LanguageToggle"
import { ThemeToggle } from "./ThemeToggle"

const firstName = profile.name.split(" ")[0]
const lastName = profile.name.split(" ").slice(1).join(" ")

const links = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
] as const

export function Header() {
  const { t } = useTranslation()

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--bg) 85%, transparent)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight"
          aria-label={profile.name}
        >
          <span style={{ color: "var(--text)" }}>{firstName}</span>
          <span
            className="hidden sm:inline"
            style={{ color: "var(--text-muted)" }}
          >
            {" "}
            {lastName}
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: "var(--text-muted)" }}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
