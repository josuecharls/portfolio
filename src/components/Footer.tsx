import { useTranslation } from "react-i18next"
import { profile } from "../data/profile"

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="mx-auto max-w-5xl px-6 text-center text-sm"
        style={{ color: "var(--text-muted)" }}
      >
        <p>
          © {year} {profile.name}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  )
}
