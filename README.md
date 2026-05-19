# FinTrack — Finance Tracker

Aplicación web para gestionar finanzas personales: registrar ingresos y gastos, ver resúmenes visuales y organizar transacciones por categoría.

## Para qué sirve

- Registrar transacciones (ingresos / gastos)
- Ver el balance total, ingresos y gastos del mes
- Gráficos de gastos por mes y por categoría
- Gestionar categorías personalizadas
- Login y registro de usuario

## Por qué lo estoy haciendo

Este proyecto tiene dos objetivos de aprendizaje:

1. **Mejorar React** — practicar componentes reutilizables, hooks personalizados, Context API, React Router y librerías como Recharts y Tailwind CSS.
2. **Aprender Node.js** — el backend (API REST, autenticación, base de datos) se construirá más adelante con Node.js y Express para poner en práctica lo aprendido del lado del servidor.

## Stack actual (frontend)

| Tecnología | Uso |
|---|---|
| React 19 | UI y lógica de componentes |
| Vite | Bundler y dev server |
| React Router v7 | Navegación entre páginas |
| Tailwind CSS v4 | Estilos |
| Axios | Llamadas HTTP a la API |
| Recharts | Gráficos de barras y circulares |
| Lucide React | Iconos |

## Stack futuro (backend)

| Tecnología | Uso |
|---|---|
| Node.js + Express | Servidor y API REST |
| JWT | Autenticación |
| PostgreSQL / MongoDB | Base de datos |

## Estructura del proyecto

```
src/
├── api/              # Instancia de axios con baseURL
├── components/
│   ├── ui/           # Componentes genéricos (Button, Input, Modal…)
│   ├── layout/       # Sidebar, Header y Layout wrapper
│   ├── transactions/ # Lista, ítem y formulario de transacciones
│   ├── dashboard/    # Tarjetas de resumen y gráficos
│   └── categories/   # Lista y formulario de categorías
├── pages/            # Páginas de la app (Login, Dashboard, etc.)
├── context/          # AuthContext — estado global del usuario
├── hooks/            # Hooks personalizados (useAuth, useTransactions)
└── utils/            # Utilidades (formatCurrency, etc.)
```

## Cómo correrlo

```bash
cd FinTrack
npm install
npm run dev
```
