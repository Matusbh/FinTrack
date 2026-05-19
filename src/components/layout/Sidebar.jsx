// Menú lateral fijo con los enlaces de navegación (Dashboard, Transacciones, Categorías).

import { NavLink } from "react-router-dom";
import { LayoutDashboard, ArrowLeftRight, Tag } from "lucide-react";

export default function Sidebar() {
  return (
    <>
      <NavLink
        to="/dashboard"
        className="flex items-center gap-2 text-[#1A1A1A] font-medium text-lg px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <LayoutDashboard />
        Dashboard
      </NavLink>

      <NavLink
        to="/transactions"
        className="flex items-center gap-2 text-[#1A1A1A] font-medium text-lg px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <ArrowLeftRight />
        Transacciones
      </NavLink>

      <NavLink
        to="/categories"
        className="flex items-center gap-2 text-[#1A1A1A] font-medium text-lg px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Tag />
        Categorías
      </NavLink>
    </>
  );
}
