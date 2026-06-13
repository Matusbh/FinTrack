// Página de transacciones. Muestra la lista completa y permite crear, editar y eliminar.

// Página principal de la app. Carga y muestra las SummaryCards y los gráficos de gastos.
import Header from "../components/layout/Header.jsx";
import { Plus } from "lucide-react";
import Card from "../components/ui/Card.jsx";

export default function TransactionsPage() {
  return (
    <>
      <div>
        <Header />
      </div>

      <h1
        className="text-2xl font-semibold text-[#1A1A1A] tracking-tight
            "
      ></h1>
    </>
  );
}
