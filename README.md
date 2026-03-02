# Benjamín Olave Barraza — Portafolio Web

Portafolio personal desarrollado en **Angular 21** con arquitectura moderna de componentes standalone, Signals y SSR. Diseño tipo terminal: fondos oscuros, acentos en rojo y texto de alto contraste.

[![Angular](https://img.shields.io/badge/Angular-21-dd0031?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![SSR](https://img.shields.io/badge/SSR-habilitado-222?style=flat-square)](https://angular.dev/guide/ssr)

---

## Secciones

| Sección            | Descripción                                                    |
| ------------------ | -------------------------------------------------------------- |
| **Hero**           | Presentación profesional con terminal decorativo animado       |
| **About**          | Enfoque en arquitectura Full Stack y proyectos en producción   |
| **Skills**         | Stack técnico: Frontend & Mobile + Backend, Data & Cloud       |
| **Projects**       | MisBoletas · TI-Pulse · Data-Sync Bot                          |
| **Certifications** | SQL (Basic) — HackerRank · Diseño Web — AIEP / Telefónica      |
| **Contact**        | Formulario reactivo con validación + links a GitHub y LinkedIn |

---

## Stack del portafolio

- **Framework:** Angular 21 — Standalone Components, Signals, `ChangeDetectionStrategy.OnPush`
- **Lenguaje:** TypeScript 5.9
- **Renderizado:** Server-Side Rendering (SSR) con `@angular/ssr` + Express
- **Estilos:** CSS puro moderno — Flexbox, Grid, Variables CSS, sin librerías externas
- **Control Flow:** Sintaxis moderna `@for`, `@if` (Angular 17+)
- **Testing:** Vitest

---

## Correr localmente

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4200)
npm start

# Build de producción
npm run build

# Servidor SSR (producción)
npm run serve:ssr:portafolio-benjamin
```

---

## Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── hero/           # Sección de presentación
│   │   ├── about/          # Sobre mí
│   │   ├── skills/         # Habilidades técnicas
│   │   ├── projects/       # Proyectos desarrollados
│   │   ├── certifications/ # Certificaciones
│   │   └── contact/        # Formulario de contacto
│   ├── app.ts
│   ├── app.html
│   └── app.config.ts
└── styles.css              # Variables CSS y estilos globales
```

---

## Contacto

- **GitHub:** [@berenjenaa](https://github.com/berenjenaa)
- **LinkedIn:** [Benjamín Olave](https://linkedin.com/in/benjamín-olave-721ba82bb/)
