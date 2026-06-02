// Página principal de la app. Carga y muestra las SummaryCards y los gráficos de gastos.
import Header from "../components/layout/Header.jsx";
import { Plus } from "lucide-react";
import ExpenseChart from "../components/dashboard/ExpenseChart.jsx";
import CategoryChart from "../components/dashboard/CategoryChart.jsx";
import Card from "../components/ui/Card.jsx";
import SummartCard from "../components/dashboard/SummaryCard.jsx";
import TransationItem from "../components/transactions/TransactionItem.jsx";

export default function DashboardPage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="lg:ml-60 flex-1 px-4 py-4 lg:px-8 lg:py-8">
        <div id="cabecera">
          <div className="flex items-center justify-between mb-4 mt-4 lg:mb-8 lg:mt-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#1A1A1A]">
                Dashboard
              </h2>
              <p className="text-sm text-[#78716C] mt-0.5">mayo 2026</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-[#333333] active:scale-[0.98] transition-all duration-150"
            >
              <Plus size={16} />
              Nueva transacción
            </a>
          </div>
        </div>
        <div id="balance">
          <div className="mb-6 lg:mb-8">
            <p className="text-xs text-[#78716C] uppercase tracking-widest font-medium mb-2">
              Saldo del mes
            </p>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:gap-6">
              <p className="font-serif text-4xl lg:text-[3.5rem] leading-none text-[#1A1A1A]">
                +€1.317,39
              </p>
              <div className="flex gap-6 lg:mb-2">
                <div>
                  <p className="text-xs mb-1">Ingresos</p>
                  <p className="font-mono text-base text-[#16A34A]">
                    +€2.450,00
                  </p>
                </div>
                <div className="w-px"></div>
                <div>
                  <p className="text-xs mb-1">Gastos</p>
                  <p className="font-mono text-base text-[#DC2626]">
                    -€1.132,61
                  </p>
                </div>
                <div className="w-px"></div>
                <div>
                  <p className="text-xs mb-1">Transacciones</p>
                  <p className="font-mono text-base text-[#1A1A1A]">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="grid" className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div id="columna-izq" className="space-y-4 lg:col-span-2 lg:space-y-6">
            <div id="gastos-mensuales">
              <ExpenseChart />
            </div>
            <div id="desgloce-categoria">
              <CategoryChart />
            </div>
          </div>

          <div id="columna-derecha" className="space-y-4 lg:col-span-1">
            <SummartCard
              titulo="Mayor gasto del mes"
              icono={
                <TransationItem
                  simbolo="HO"
                  titulo="Alquiler piso"
                  cat="Hogar"
                  fecha="06 mayo"
                />
              }
              valor="-750"
            ></SummartCard>
          </div>
        </div>
      </div>
    </>
  );
}
