// Barra superior de la app. Muestra el título de la página actual y el nombre del usuario logueado.
import Sidebar from "../layout/Sidebar.jsx";

export default function Header() {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 w-60 bg-white border-r border-[#EAEAEA] flex flex-col z-10">
        <div className="px-6 py-5 border-b border-[#EAEAEA]">
          <span className="text-base font-semibold text-[#1A1A1A] tracking-tight">
            Fintrack
          </span>
        </div>

        <div className="flex flex-col flex-1 mt-3">
          <Sidebar />
        </div>

        <div className="px-4 py-4 border-t border-[#EAEAEA] mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#B45309] flex items-center justify-center text-white text-xs font-semibold shrink-0">
              M
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#1A1A1A] truncate">
                Matus Behun
              </p>
              <p className="text-xs text-[#78716C] truncate">
                matusbehun03@gmail.com
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
