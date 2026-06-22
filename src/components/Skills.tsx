import { useTranslation } from "react-i18next"
import { skillGroups } from "../data/skills"
import { Section } from "./Section"

export function Skills() {
  const { t } = useTranslation()

  return (
    <Section
      id="skills"
      title={t("skills.title")}
      subtitle={t("skills.subtitle")}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="rounded-xl border p-5"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-elevated)",
            }}
          >
            <h3
              className="mb-4 text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--accent)" }}
            >
              {t(`skills.groups.${group.id}`)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border px-3 py-1.5 text-sm"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text)",
                    background: "var(--bg-muted)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
