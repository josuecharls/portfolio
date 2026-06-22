import type { ComponentType } from "react"
import { Mail, MapPin } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "./icons"
import { useTranslation } from "react-i18next"
import { profile } from "../data/profile"
import { Section } from "./Section"

export function Contact() {
  const { t } = useTranslation()

  const items = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: profile.location,
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: "josue-charles-cipiriano-arevalo",
      href: profile.linkedin,
    },
    {
      icon: GitHubIcon,
      label: "GitHub",
      value: "josuecharls",
      href: profile.github,
    },
  ]

  return (
    <Section
      id="contact"
      title={t("contact.title")}
      subtitle={t("contact.subtitle")}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <ContactCard key={item.label} {...item} />
        ))}
      </div>
    </Section>
  )
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: ComponentType<{ size?: number }>
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div
      className="flex items-center gap-4 rounded-xl border p-5 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg-elevated)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
        style={{
          background: "var(--accent-soft)",
          color: "var(--accent)",
        }}
      >
        <Icon size={18} />
      </div>
      <div>
        <p className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
          {label}
        </p>
        <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
          {value}
        </p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className="block transition-opacity hover:opacity-90"
      >
        {content}
      </a>
    )
  }

  return content
}
