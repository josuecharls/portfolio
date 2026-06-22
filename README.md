# Portfolio — Josue Cipiriano Arevalo

Portafolio personal de **Josue Cipiriano Arevalo**, Full Stack Developer especializado en .NET, React y TypeScript.

Sitio web minimalista y responsive para presentar perfil profesional, experiencia laboral, proyectos y formas de contacto. Incluye CV descargable, modo claro/oscuro e internacionalización español/inglés.

## Secciones

| Sección | Contenido |
| --- | --- |
| **Hero** | Foto, nombre, rol, bio, botón de CV, enlaces a GitHub y LinkedIn |
| **Sobre mí** | Resumen profesional |
| **Experiencia** | Timeline con 6 empleos y formación académica |
| **Proyectos** | 6 proyectos con stack, estado y enlaces a demo/código |
| **Habilidades** | Tecnologías agrupadas por categoría |
| **Contacto** | Email, ubicación, LinkedIn y GitHub |

## Proyectos destacados

| Proyecto | Demo | Repositorio |
| --- | --- | --- |
| **GSCommerce** | [gscommerce.net](https://gscommerce.net/) | [GitHub](https://github.com/josuecharls/GSCommerce) |
| **Academia Genesys** | [academiagenesys.vercel.app](https://academiagenesys.vercel.app/) | [GitHub](https://github.com/josuecharls/LandingPageAcademiaGenesys) |
| **Registro Academia Genesys** | [registroacademiagenesys.vercel.app](https://registroacademiagenesys.vercel.app/) | [GitHub](https://github.com/josuecharls/LandingPageRegister) |
| EduMatch | En desarrollo | — |
| Intranet Genesys | En desarrollo | — |
| Control de Peso | En desarrollo | — |

## Tecnologías

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS 4
- **i18n:** i18next, react-i18next (ES / EN)
- **UI:** Lucide React, tema claro/oscuro con CSS variables
- **Tooling:** ESLint, TypeScript

## Desarrollo local

Requisitos: Node.js 18+ y npm.

```bash
git clone https://github.com/josuecharls/portfolio.git
cd portfolio
npm install
npm run dev
```

La app estará disponible en `http://localhost:5173`.

### Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción (carpeta dist/)
npm run preview  # Vista previa del build
npm run lint     # ESLint
```

## Despliegue (Vercel)

1. Importar el repositorio en [Vercel](https://vercel.com).
2. Framework: **Vite**.
3. Build command: `npm run build`
4. Output directory: `dist`

## Estructura del proyecto

```
portfolio/
├── public/
│   ├── perfil.jpg              # Foto de perfil
│   ├── cv-josue-cipiriano.pdf  # CV descargable
│   └── favicon.svg
├── src/
│   ├── components/             # UI (Header, Hero, Experience, etc.)
│   ├── context/                # Tema claro/oscuro
│   ├── data/                   # Perfil, proyectos, experiencia, skills
│   └── i18n/locales/           # Traducciones es.json y en.json
└── ...
```

## Editar contenido

| Archivo | Qué modificar |
| --- | --- |
| `src/data/profile.ts` | Datos personales y enlaces |
| `src/data/projects.ts` | URLs, tecnologías y estado de proyectos |
| `src/data/experience.ts` | Orden de experiencia y educación |
| `src/i18n/locales/es.json` | Textos en español |
| `src/i18n/locales/en.json` | Textos en inglés |
| `public/cv-josue-cipiriano.pdf` | Actualizar CV |

## Contacto

- **LinkedIn:** [josue-charles-cipiriano-arevalo](https://www.linkedin.com/in/josue-charles-cipiriano-arevalo/)
- **GitHub:** [josuecharls](https://github.com/josuecharls)
- **Email:** josuecharls1@gmail.com

## Licencia

Proyecto personal. Todos los derechos reservados.
