# Arquitectura LOCALIA

## Diagrama de alto nivel

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│  Next.js 15 · React 19 · Tailwind · TypeScript               │
├─────────────────────────────────────────────────────────────┤
│  / (Landing)     │  /app/* (Webapp)                          │
│  - Hero          │  - Dashboard                              │
│  - Features      │  - [features]                             │
│  - CTA           │                                           │
└────────────────────────┬────────────────────────────────────┘
                         │ REST API
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                        BACKEND                               │
│  Express · TypeScript · Prisma · MVC                         │
├─────────────────────────────────────────────────────────────┤
│  Routes → Controllers → Services → Prisma                     │
│  Middleware: validate, errorHandler, auth                     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    PostgreSQL                                │
└─────────────────────────────────────────────────────────────┘
```

## Patrón MVC (Backend)

- **Model**: Prisma schema + repositorios implícitos
- **View**: Respuestas JSON (API REST)
- **Controller**: Recibe request, delega a Service, devuelve response
- **Service**: Lógica de negocio, acceso a datos

## Escalabilidad

1. **Nuevas features**: Crear `routes/`, `controllers/`, `services/`, `validators/`
2. **Nuevos modelos**: Añadir a `prisma/schema.prisma`, migrar
3. **Componentes UI**: `components/` por dominio (landing, app, ui)
4. **Hooks**: `hooks/` para lógica reutilizable

## Mobile

- PWA-ready (manifest.json)
- Responsive con breakpoints mobile-first
- Safe areas para notch
- Touch targets 44x44px mínimos
