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

- **Frontend**: http://localhost:5009
- **Backend**: http://localhost:8009
- **Landing**: http://localhost:5009
- **Webapp**: http://localhost:5009/app

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
| Frontend | 5009 |
| Backend  | 8009 |

## Buenas prácticas implementadas

- **MVC** en backend (Controllers → Services → Prisma)
- **Validación** con Zod (env y body)
- **TypeScript** estricto
- **DRY**: copy en `frontend/src/content/landing.ts`, animaciones en `frontend/src/lib/motion.ts`, contacto y docs en una sola fuente
- **Entorno**: variables en `.env` (ver `.env.example`), validación en `backend/src/config/index.ts`
- **Mobile-first**, safe areas, PWA-ready (manifest.json)
- **Seguridad**: Helmet, CORS, bcrypt
- **Monorepo** con pnpm workspaces

## Cómo te llegan los contactos

Todos los botones **«Solicitar demo»** abren un **formulario** sencillo (nombre, email, mensaje opcional). Al enviar, el contenido te llega por email al buzón que configures.

- **Email de destino**: En el frontend, `frontend/.env.local`: `NEXT_PUBLIC_CONTACT_EMAIL=tu-email@donde-revises.com`. En producción, la misma variable en el panel de entorno. Por defecto se usa **hola@localia.es**.
- **Envío del formulario**: Se usa [Resend](https://resend.com). En `frontend/.env.local` (y en producción) añade `RESEND_API_KEY=re_xxx` (clave desde el dashboard de Resend). Sin esta variable el envío devuelve error 503.
- **Resumen**: Interesado hace clic en «Solicitar demo» → se abre el modal → rellena y envía → **te llega un email** a tu buzón con sus datos; el `reply_to` es su email para que puedas responder directo.

## Producción y troubleshooting

- **Icono y marca**: La pestaña del navegador muestra la "L" de LOCALIA (verde sobre fondo oscuro), no el logo de Next. El indicador de desarrollo de Next está desactivado (`devIndicators: false`).
- **Error "Cannot read properties of undefined (reading 'call')"**: Suele deberse a caché de Webpack o del navegador. Solución: en el frontend ejecuta `npm run build:clean` (o `pnpm --filter frontend build:clean`) y vuelve a desplegar; en el navegador, vacía caché y service workers (DevTools → Application → Clear storage).

## Documentación

- **[El poder de una IA privada](docs/PRIVATE-GPT-GUIDE.md)** — Guía en español sobre IA privada para empresas (qué es, elementos, privacidad, seguridad, cómo implementarla). Localia es tu IA privada local, no un producto llamado "PrivateGPT".
- **Integración [Booster Framework](https://docs.boosterframework.com)** — Backend event-driven y serverless; la guía enlaza Booster para equipos que quieran escalar el backend.
- En la web: [Guía: IA privada](http://localhost:5009/docs/private-gpt) (español) y enlaces a Booster en la landing.
