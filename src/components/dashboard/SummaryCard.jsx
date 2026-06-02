// Tarjeta de resumen. Muestra un número clave: ingresos totales, gastos totales o balance actual.
export default function SummartCard({ titulo, icono, valor }) {
  return (
    <div className="bg-white border border-[#EAEAEA] rounded-lg p-6 w-ull">
      <p className="text-xs text-[#78716C] uppercase tracking-widest font-medium mb-4">
        {titulo}
      </p>
      <div className="mb-4">{icono}</div>
      <p className="font-mono text-start text-3xl font-semibold text-[#DC2626]">
        {valor}€
      </p>
    </div>
  );
}
