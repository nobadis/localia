# LOCALIA

Webapp multiplataforma con landing y aplicación. Frontend y backend separados, patrón MVC, tecnología moderna y escalable.

## Stack

| Capa | Tecnología |
|------|------------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS |
| Backend | Node.js, Express, TypeScript, Prisma |
| Base de datos | PostgreSQL |
| Monorepo | pnpm workspaces |

## Estructura

```
LOCALIA/
├── frontend/          # Next.js App Router
│   ├── src/
│   │   ├── app/       # Rutas (landing + /app/*)
│   │   ├── components/
│   │   └── lib/
│   └── ...
├── backend/           # Express MVC
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── validators/
│   └── prisma/
└── ...
```

## Requisitos

- Node.js 20+
- pnpm 9+
- PostgreSQL (para backend)

## Inicio rápido

```bash
# Instalar dependencias
pnpm install

# Copiar variables de entorno
cp .env.example .env
# Editar .env con tu DATABASE_URL

# Generar cliente Prisma
pnpm --filter backend db:generate

# Desarrollo (ambos en paralelo)
pnpm dev
```

- **Frontend**: http://localhost:5008
- **Backend**: http://localhost:8008
- **Landing**: http://localhost:5008
- **Webapp**: http://localhost:5008/app

## Scripts

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Frontend + Backend en paralelo |
| `pnpm dev:frontend` | Solo frontend |
| `pnpm dev:backend` | Solo backend |
| `pnpm build` | Build de todos los paquetes |
| `pnpm db:migrate` | Migraciones Prisma |
| `pnpm db:studio` | Prisma Studio |

## Puertos

| Servicio | Puerto |
|----------|--------|
| Frontend | 5008 |
| Backend  | 8008 |

## Buenas prácticas implementadas

- **MVC** en backend (Controllers → Services → Prisma)
- **Validación** con Zod (env y body)
- **TypeScript** estricto
- **DRY**: copy en `frontend/src/content/landing.ts`, animaciones en `frontend/src/lib/motion.ts`, contacto y docs en una sola fuente
- **Entorno**: variables en `.env` (ver `.env.example`), validación en `backend/src/config/index.ts`
- **Mobile-first**, safe areas, PWA-ready (manifest.json)
- **Seguridad**: Helmet, CORS, bcrypt
- **Monorepo** con pnpm workspaces

## Documentación

- **[El poder de una IA privada](docs/PRIVATE-GPT-GUIDE.md)** — Guía en español sobre IA privada para empresas (qué es, elementos, privacidad, seguridad, cómo implementarla). Localia es tu IA privada local, no un producto llamado "PrivateGPT".
- **Integración [Booster Framework](https://docs.boosterframework.com)** — Backend event-driven y serverless; la guía enlaza Booster para equipos que quieran escalar el backend.
- En la web: [Guía: IA privada](http://localhost:5008/docs/private-gpt) (español) y enlaces a Booster en la landing.
