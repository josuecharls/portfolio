import type { ReactNode } from "react"

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10">
        <h2
          className="mb-2 text-2xl font-bold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-base" style={{ color: "var(--text-muted)" }}>
            {subtitle}
          </p>
        )}
        <div
          className="mt-4 h-0.5 w-12 rounded-full"
          style={{ background: "var(--accent)" }}
        />
      </div>
      {children}
    </section>
  )
}
