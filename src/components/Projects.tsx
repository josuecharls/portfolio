import { useTranslation } from "react-i18next"
import { projects } from "../data/projects"
import { ProjectCard } from "./ProjectCard"
import { Section } from "./Section"

export function Projects() {
  const { t } = useTranslation()

  const sorted = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    if (a.status === "live" && b.status !== "live") return -1
    if (a.status !== "live" && b.status === "live") return 1
    return 0
  })

  return (
    <Section
      id="projects"
      title={t("projects.title")}
      subtitle={t("projects.subtitle")}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {sorted.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
