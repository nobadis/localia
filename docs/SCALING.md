# Escalabilidad LOCALIA

## Puertos fijos

| Servicio | Puerto | Variable |
|----------|--------|----------|
| Frontend | **5008** | - |
| Backend  | **8008** | PORT |

## Arquitectura para escalado horizontal

```
                    ┌─────────────┐
                    │   CDN / LB  │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│  Frontend    │  │  Frontend     │  │  Frontend     │
│  :5008       │  │  :5008       │  │  :5008       │
└───────┬──────┘  └───────┬──────┘  └───────┬──────┘
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                    ┌──────┴──────┐
                    │  API LB    │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│  Backend      │  │  Backend      │  │  Backend      │
│  :8008        │  │  :8008       │  │  :8008       │
└───────┬──────┘  └───────┬──────┘  └───────┬──────┘
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                    ┌──────┴──────┐
                    │  PgBouncer │
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │ PostgreSQL │
                    │  (Primary) │
                    └────────────┘
```

## Checklist para producción

### Backend (stateless)
- [x] Sin sesiones en memoria
- [x] Health checks (`/health`, `/api/health`)
- [x] CORS configurable por entorno
- [x] Connection pooling vía Prisma (ver DATABASE_URL)

### Base de datos
- **Connection pooling**: Añade `?connection_limit=10` a DATABASE_URL en producción
- **PgBouncer**: Recomendado para > 10 instancias backend
- **Read replicas**: Prisma soporta `directUrl` para writes

### Variables de entorno por entorno

| Variable | Dev | Staging | Prod |
|----------|-----|---------|------|
| PORT | 8008 | 8008 | 8008 |
| CORS_ORIGINS | localhost:5008 | https://staging... | https://app... |
| DATABASE_URL | local | pooler | pooler + read replicas |

### Kubernetes
- `livenessProbe`: GET /health
- `readinessProbe`: GET /api/health
- Cada pod escucha en 8008
