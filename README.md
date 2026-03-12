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
- **Validación** con Zod
- **TypeScript** estricto
- **Mobile-first** y responsive
- **Safe areas** para dispositivos móviles
- **PWA-ready** (manifest.json)
- **Seguridad**: Helmet, CORS, bcrypt
- **Monorepo** con pnpm workspaces
