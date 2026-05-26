// Caja con fondo blanco y sombra. Envuelve bloques de contenido para darles aspecto de tarjeta.

export default function Card({ children }) {
  return <div className="bg-white rounded-lg shadow p-4">{children}</div>;
}
