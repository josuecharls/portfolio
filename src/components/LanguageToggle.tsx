import { useTranslation } from "react-i18next"

export function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggle = () => {
    const next = i18n.language === "es" ? "en" : "es"
    i18n.changeLanguage(next)
    localStorage.setItem("portfolio-lang", next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-9 items-center rounded-lg border px-3 text-xs font-semibold tracking-wide transition-colors"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg-elevated)",
        color: "var(--text-muted)",
      }}
      aria-label="Toggle language"
    >
      {i18n.language === "es" ? "EN" : "ES"}
    </button>
  )
}
