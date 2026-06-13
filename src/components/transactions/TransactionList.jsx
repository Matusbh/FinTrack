import Card from "../ui/Card.jsx";
import TransactionItem from "./TransactionItem.jsx";

const colorPorCategoria = {
  Alimentación: "bg-stone-500",
  Suscripciones: "bg-blue-500",
  Transporte: "bg-amber-500",
  Trabajo: "bg-emerald-500",
  Restaurantes: "bg-rose-500",
  Hogar: "bg-orange-500",
  Salud: "bg-violet-500",
};

export default function TransactionList() {
  const transacciones = [
    {
      id: 1,
      simbolo: "AL",
      titulo: "Mercadona",
      categoria: "Alimentación",
      fecha: "15 mayo",
      monto: -87.43,
    },
    {
      id: 2,
      simbolo: "SU",
      titulo: "Netflix",
      categoria: "Suscripciones",
      fecha: "14 mayo",
      monto: -17.99,
    },
    {
      id: 3,
      simbolo: "TR",
      titulo: "Renfe AVE Madrid–Valencia",
      categoria: "Transporte",
      fecha: "13 mayo",
      monto: -42.6,
    },
    {
      id: 4,
      simbolo: "TR",
      titulo: "Freelance diseño web",
      categoria: "Trabajo",
      fecha: "10 mayo",
      monto: 650.0,
    },
    {
      id: 5,
      simbolo: "RE",
      titulo: "Restaurante La Tasca",
      categoria: "Restaurantes",
      fecha: "08 mayo",
      monto: -34.2,
    },
  ];

  const formatMonto = (monto) => {
    const abs = Math.abs(monto).toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return monto >= 0 ? `+€${abs}` : `-€${abs}`;
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-[#1A1A1A]">
          Últimas transacciones
        </h3>
        <button className="text-sm text-[#C8622A] hover:underline font-medium">
          Ver todas
        </button>
      </div>

      <div className="flex flex-col">
        {transacciones.map((t, i) => (
          <div key={t.id}>
            <div className="flex justify-between items-center py-3">
              <TransactionItem
                simbolo={t.simbolo}
                titulo={t.titulo}
                cat={t.categoria}
                fecha={t.fecha}
                color={colorPorCategoria[t.categoria] ?? "bg-stone-400"}
              />
              <span
                className={`text-sm font-semibold tabular-nums ${
                  t.monto >= 0 ? "text-emerald-600" : "text-rose-500"
                }`}
              >
                {formatMonto(t.monto)}
              </span>
            </div>

            {
              //La i es para saber si es la última transacción, si no lo es, se dibuja una línea divisoria
              i < transacciones.length - 1 && (
                <div className="border-t border-stone-100" />
              )
            }
          </div>
        ))}
      </div>
    </Card>
  );
}
