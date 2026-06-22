import { useTranslation } from "react-i18next"
import { education, experience } from "../data/experience"
import { Section } from "./Section"

export function Experience() {
  const { t } = useTranslation()

  return (
    <Section
      id="experience"
      title={t("experience.title")}
      subtitle={t("experience.subtitle")}
    >
      <div className="relative space-y-0">
        {experience.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            entry={entry}
            isLast={false}
            showLine={index < experience.length - 1}
            prefix="experience.items"
          />
        ))}
      </div>

      <h3
        className="mb-6 mt-14 text-lg font-semibold"
        style={{ color: "var(--text)" }}
      >
        {t("experience.educationTitle")}
      </h3>

      <div className="relative space-y-0">
        {education.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            entry={entry}
            isLast={index === education.length - 1}
            showLine={index < education.length - 1}
            prefix="experience.education"
          />
        ))}
      </div>
    </Section>
  )
}

function TimelineItem({
  entry,
  showLine,
  prefix,
}: {
  entry: { id: string; location: string }
  isLast: boolean
  showLine: boolean
  prefix: "experience.items" | "experience.education"
}) {
  const { t, i18n } = useTranslation()
  const base = `${prefix}.${entry.id}`
  const highlights = t(`${base}.highlights`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[]

  const title =
    prefix === "experience.items"
      ? t(`${base}.company`)
      : t(`${base}.institution`)

  const subtitle =
    prefix === "experience.items"
      ? t(`${base}.role`)
      : t(`${base}.degree`)

  const clientKey = `${base}.client`
  const client =
    prefix === "experience.items" && i18n.exists(clientKey)
      ? t(clientKey)
      : ""

  return (
    <div className="relative flex gap-5 pb-10">
      <div className="flex flex-col items-center">
        <div
          className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2"
          style={{
            borderColor: "var(--accent)",
            background: "var(--bg)",
          }}
        />
        {showLine && (
          <div
            className="mt-1 w-px flex-1"
            style={{ background: "var(--border)" }}
          />
        )}
      </div>

      <div className="min-w-0 flex-1 pb-2">
        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
          <div>
            <h3
              className="text-base font-semibold"
              style={{ color: "var(--text)" }}
            >
              {title}
            </h3>
            {client && (
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {client}
              </p>
            )}
          </div>
          <p
            className="shrink-0 text-sm font-medium"
            style={{ color: "var(--accent)" }}
          >
            {t(`${base}.period`)}
          </p>
        </div>

        <p
          className="mb-1 text-sm font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          {subtitle}
        </p>
        <p className="mb-4 text-sm" style={{ color: "var(--text-muted)" }}>
          {entry.location}
        </p>

        {highlights.length > 0 && (
          <ul className="space-y-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
