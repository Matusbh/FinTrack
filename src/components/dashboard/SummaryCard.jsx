// Tarjeta de resumen. Muestra un número clave: ingresos totales, gastos totales o balance actual.
export default function SummartCard({ titulo, icono, valor }) {
  //Esto es para los colores de los numeros
  const color = String(valor).startsWith("-")
    ? "text-[#DC2626]"
    : String(valor).startsWith("+")
      ? "text-[#16A34A]"
      : "text-[#1A1A1A]";

  return (
    <div className="bg-white border border-[#EAEAEA] rounded-lg p-6">
      <p className="text-xs text-[#78716C] uppercase tracking-widest font-medium mb-4">
        {titulo}
      </p>
      <div className="mb-4">{icono}</div>
      {
        //Dependiendo del valor que se lea em el string vaslor se aploica un color u otro
      }
      <p className={`font-mono text-start text-3xl font-semibold ${color}`}>
        {valor}€
      </p>
    </div>
  );
}
