export default function TransactionItem({
  simbolo,
  titulo,
  cat,
  fecha,
  color,
  tipoGasto,
}) {
  return (
    <div className="flex gap-3 items-center">
      <div
        className={`w-10 h-10 rounded-sm flex items-center justify-center shrink-0 text-white text-xs font-semibold ${color}`}
      >
        {simbolo}
      </div>
      <div className="flex flex-col">
        <h4 className="text-sm font-medium text-[#1A1A1A]">{titulo}</h4>
        <p className="text-xs text-[#78716C]">
          {cat} · {fecha}
        </p>
        <p>{tipoGasto}</p>
      </div>
    </div>
  );
}
