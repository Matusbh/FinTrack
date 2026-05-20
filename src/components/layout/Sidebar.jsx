// Menú lateral fijo con los enlaces de navegación (Dashboard, Transacciones, Categorías).

import { NavLink } from "react-router-dom";
import { LayoutDashboard, ArrowLeftRight, Tag } from "lucide-react";

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col gap-1 ">
        <nav>
          <NavLink
            to="/dashboard"
            className="flex items-center gap-2 font-medium text-md px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/transactions"
            className="flex items-center gap-2 font-medium text-md px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeftRight size={20} />
            Transacciones
          </NavLink>

          <NavLink
            to="/categories"
            className="flex items-center gap-2 font-medium text-md px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Tag size={20} />
            Categorías
          </NavLink>
        </nav>
      </div>
    </>
  );
}
