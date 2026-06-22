import { useTranslation } from "react-i18next"
import { Section } from "./Section"

export function About() {
  const { t } = useTranslation()

  return (
    <Section id="about" title={t("about.title")}>
      <p
        className="max-w-3xl text-base leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {t("about.text")}
      </p>
    </Section>
  )
}
