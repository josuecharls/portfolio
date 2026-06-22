import { Download, Mail } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "./icons"
import { useTranslation } from "react-i18next"
import { profile } from "../data/profile"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-16">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
        <div className="relative shrink-0">
          <div
            className="absolute -inset-1 rounded-2xl opacity-60"
            style={{ background: "var(--accent-soft)" }}
          />
          <img
            src={profile.photo}
            alt={profile.name}
            className="relative h-36 w-36 rounded-2xl object-cover md:h-44 md:w-44"
            style={{
              boxShadow: "var(--shadow-lg)",
              border: "2px solid var(--border)",
            }}
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <p
            className="mb-2 text-sm font-medium tracking-wide"
            style={{ color: "var(--accent)" }}
          >
            {t("hero.greeting")}
          </p>
          <h1
            className="mb-2 text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            {profile.name}
          </h1>
          <p
            className="mb-5 text-lg font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            {profile.title}
          </p>
          <p
            className="mb-8 max-w-xl text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {t("hero.bio")}
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--accent)" }}
            >
              <Download size={16} />
              {t("hero.downloadCv")}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors"
              style={{
                borderColor: "var(--border)",
                color: "var(--text)",
                background: "var(--bg-elevated)",
              }}
            >
              {t("hero.viewProjects")}
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 md:justify-start">
            <SocialLink href={profile.github} label="GitHub">
              <GitHubIcon size={18} />
            </SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <LinkedInIcon size={18} />
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <Mail size={18} />
            </SocialLink>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors hover:opacity-80"
      style={{
        borderColor: "var(--border)",
        color: "var(--text-muted)",
        background: "var(--bg-elevated)",
      }}
    >
      {children}
    </a>
  )
}
