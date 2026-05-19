# Contexto del proyecto — FinTrack

## Qué hay hecho hasta ahora

### Scaffolding inicial
- Proyecto creado con **Vite + React 19**
- Instaladas todas las dependencias del frontend:
  - `react-router-dom` — navegación
  - `axios` — llamadas HTTP
  - `tailwindcss` — estilos
  - `recharts` — gráficos
  - `lucide-react` — iconos

### Estructura de carpetas
Se creó la estructura completa de `src/` con todos los archivos vacíos listos para desarrollar:

```
src/
├── api/axios.js
├── components/
│   ├── ui/           (Button, Input, Modal, Badge, Card)
│   ├── layout/       (Sidebar, Header, Layout)
│   ├── transactions/ (TransactionList, TransactionItem, TransactionForm)
│   ├── dashboard/    (SummaryCard, ExpenseChart, CategoryChart)
│   └── categories/   (CategoryList, CategoryForm)
├── pages/            (Login, Register, Dashboard, Transactions, Categories)
├── context/          (AuthContext)
├── hooks/            (useAuth, useTransactions)
└── utils/            (formatCurrency)
```

### Archivos base
- `src/main.jsx` — punto de entrada de React
- `src/App.jsx` — componente raíz (por ahora solo renderiza un `<h1>`)
- `src/index.css` — estilos globales
- `src/assets/` — carpeta para imágenes y recursos estáticos

### Lo que NO hay hecho todavía
- Ningún componente tiene código real aún
- No hay rutas configuradas en `App.jsx`
- No hay backend ni API

---

## Pregunta: ¿Puedo instalar y usar Node.js para el backend más adelante?

**Sí, totalmente. No hay ningún problema.**

Aquí el porqué:

### Por qué no tienes que decidirlo ahora

El frontend (React + Vite) y el backend (Node.js + Express) son **dos proyectos separados** que viven en carpetas distintas y corren en puertos distintos. No interfieren entre sí en ningún momento del desarrollo.

Lo que estás haciendo ahora, construir el frontend primero, es exactamente la forma correcta de trabajar cuando quieres aprender las dos tecnologías por separado sin saturarte.

### Cómo se vería cuando añadas el backend

```
FinanceTracker/
├── FinTrack/          ← frontend React (lo que tienes ahora)
└── server/            ← backend Node.js (lo crearás después)
    ├── index.js
    ├── routes/
    └── models/
```

### Cómo conectarás ambos cuando llegue el momento

En `src/api/axios.js` ya tienes el archivo preparado. Solo tendrás que apuntar la `baseURL` a tu servidor Node.js:

```js
// src/api/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // URL de tu servidor Node.js
});

export default api;
```

Y desde ahí todos los hooks (`useTransactions`, `useAuth`) harán las llamadas a esa API.

### Resumen

| Fase | Qué haces | Tecnología |
|---|---|---|
| Ahora | Construir el frontend completo | React + Vite |
| Después | Crear el backend y conectarlo | Node.js + Express |

No necesitas instalar nada de Node.js para el backend ahora mismo. Cuando llegue el momento, creas una carpeta `server/`, corres `npm init` ahí dentro, e instalas Express. El frontend no cambia nada.
