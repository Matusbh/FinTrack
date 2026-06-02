// Una fila de transacción: nombre, fecha, categoría y monto. Recibe los datos de una sola transacción.

export default function TransactionItem({ simbolo, titulo, cat, fecha }) {
  return (
    <>
      <div id="componente" className="flex gap-1">
        <div
          id="simbolo"
          className="w-9 h-9 rounded-md bg-stone-100 flex items-center justify-center shrink-0"
        >
          {simbolo}
        </div>
        <div className="flex flex-col">
          <h4 id="titulo" className="text-sm font-medium text-[#1A1A1A]">
            {titulo}
          </h4>
          <div className="flex gap-1">
            <p id="categoria" className="text-xs text-[#78716C]">
              {cat}
            </p>
            <p id="fecha" className="text-xs text-[#78716C]">
              /{fecha}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
