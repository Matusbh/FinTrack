// Gráfico de barras con los gastos agrupados por mes usando Recharts.
//Primer vcez que uso recharts

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import Card from "../ui/Card.jsx";

export default function ExpenseChart() {
  const data = [
    { mes: "Enero", gastos: 500 },
    { mes: "Febrero", gastos: 800 },
    { mes: "Marzo", gastos: 200 },
    { mes: "Abril", gastos: 1000 },
    { mes: "Mayo", gastos: 400 },
    { mes: "Junio", gastos: 600 },
  ];

  return (
    <>
      <Card>
        <div className="flex items-center justify-between mb-4 ">
          <h3 className="text-lg font-medium text-[#1A1A1A] ">
            Gastos por mes
          </h3>
          <p className="text-xs text-[#78716C]">Últimos 6 meses</p>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="gastos"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </>
  );
}
