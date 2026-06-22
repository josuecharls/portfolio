import { ExternalLink } from "lucide-react"
import { GitHubIcon } from "./icons"
import { useTranslation } from "react-i18next"
import type { Project } from "../data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()
  const name = t(`projects.items.${project.id}.name`)
  const description = t(`projects.items.${project.id}.description`)

  return (
    <article
      className="group flex flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg-elevated)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3
          className="text-lg font-semibold"
          style={{ color: "var(--text)" }}
        >
          {name}
        </h3>
        <div className="flex shrink-0 flex-wrap justify-end gap-2">
          {project.featured && (
            <Badge label={t("projects.featured")} variant="accent" />
          )}
          <Badge
            label={
              project.status === "live"
                ? t("projects.live")
                : t("projects.development")
            }
            variant={project.status === "live" ? "success" : "muted"}
          />
        </div>
      </div>

      <p
        className="mb-5 flex-1 text-sm leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md px-2.5 py-1 font-mono text-xs"
            style={{
              background: "var(--bg-muted)",
              color: "var(--text-muted)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ color: "var(--accent)" }}
          >
            <ExternalLink size={14} />
            {t("projects.viewDemo")}
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ color: "var(--text-muted)" }}
          >
            <GitHubIcon size={14} />
            {t("projects.viewCode")}
          </a>
        )}
      </div>
    </article>
  )
}

function Badge({
  label,
  variant,
}: {
  label: string
  variant: "accent" | "success" | "muted"
}) {
  const styles = {
    accent: {
      background: "var(--accent-soft)",
      color: "var(--accent)",
    },
    success: {
      background: "rgba(34, 197, 94, 0.12)",
      color: "#16a34a",
    },
    muted: {
      background: "var(--bg-muted)",
      color: "var(--text-muted)",
    },
  }[variant]

  return (
    <span
      className="rounded-full px-2.5 py-0.5 text-xs font-medium"
      style={styles}
    >
      {label}
    </span>
  )
}
