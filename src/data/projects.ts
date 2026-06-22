export interface Project {
  id: string
  featured?: boolean
  tech: string[]
  liveUrl?: string
  repoUrl?: string
  status: "live" | "development"
}

export const projects: Project[] = [
  {
    id: "gscommerce",
    featured: true,
    tech: ["ASP.NET Core", "Blazor WASM", "SQL Server", "Entity Framework", "JWT"],
    liveUrl: "https://gscommerce.net/",
    repoUrl: "https://github.com/josuecharls/GSCommerce",
    status: "live",
  },
  {
    id: "landingAcademia",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveUrl: "https://academiagenesys.vercel.app/",
    repoUrl: "https://github.com/josuecharls/LandingPageAcademiaGenesys",
    status: "live",
  },
  {
    id: "landingRegistro",
    tech: ["React", "TypeScript", "Vite", "React Hook Form", "Zod"],
    liveUrl: "https://registroacademiagenesys.vercel.app/",
    repoUrl: "https://github.com/josuecharls/LandingPageRegister",
    status: "live",
  },
  {
    id: "edumatch",
    tech: ["React", "Capacitor", "ASP.NET Core", "SQL Server", "i18n"],
    status: "development",
  },
  {
    id: "intranetGenesys",
    tech: ["ASP.NET Core", "Blazor WASM", "SQL Server", "JWT"],
    status: "development",
  },
  {
    id: "controlPeso",
    tech: ["React", "TypeScript", "ASP.NET Core", "Recharts", "React PDF"],
    status: "development",
  },
]
