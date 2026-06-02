// Gráfico circular (pie) que muestra cuánto se gastó en cada categoría usando Recharts.
// Gastos por categoria muestra el desglose de gastos por categoría con las barras de progreso

import Card from "../ui/Card.jsx";

export default function CategoryChart() {
  const categories = [
    { name: "Hogar", amount: 789.99, percentage: 70, color: "#B45309" },
    { name: "Alimentación", amount: 140.3, percentage: 12, color: "#78716C" },
    { name: "Transporte", amount: 111.0, percentage: 10, color: "#78716C" },
    { name: "Suscripciones", amount: 33.97, percentage: 3, color: "#A8A29E" },
    { name: "Restaurantes", amount: 34.2, percentage: 3, color: "#A8A29E" },
    { name: "Salud", amount: 23.15, percentage: 2, color: "#A8A29E" },
  ];
  return (
    <>
      <Card className="">
        <div id="cabecera" className="flex items-center justify-between mb-4 ">
          <h3 className="text-lg font-semibold text-[#1A1A1A]">
            Desgloce por categoría
          </h3>
          <p className="text-md text-[#78716C]">Último mes</p>
        </div>
        {
          //renderizar cada categoría con su barra de progreso
        }
        <div className="space-y-5">
          {categories.map((cat) => (
            <div key={cat.name} className="flex items-center gap-4">
              <div className="w-28 text-xs text-[#78716C] text-right shrink-0">
                {cat.name}
              </div>
              <div className="flex-1 h-1.5 bg-[#F5F4F0] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${cat.percentage}%`,
                    backgroundColor: cat.color,
                  }}
                />
              </div>
              <div className="w-20 font-mono text-xs text-[#1A1A1A] text-right shrink-0">
                €{cat.amount.toFixed(2)}
              </div>
              <div className="w-8 text-xs text-[#78716C] text-right shrink-0">
                {cat.percentage}%
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
