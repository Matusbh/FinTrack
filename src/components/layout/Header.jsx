// Barra superior de la app. Muestra el título de la página actual y el nombre del usuario logueado.
import Sidebar from "../layout/Sidebar.jsx";

export default function Header() {
  return (
    <>
      <aside class="fixed inset-y-0 left-0 w-60 bg-white border-r border-[#EAEAEA] flex flex-col justify-between z-10">
        <div class="px-6 py-5 border-b border-[#EAEAEA]">
          <span className="text-base font-semibold text-[#1A1A1A] tracking-tight">
            Fintrack
          </span>
        </div>

        <div>
          <Sidebar />
        </div>

        <div class="px-4 py-4 border-t border-[#EAEAEA]">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-[#B45309] flex items-center justify-center text-white text-xs font-semibold shrink-0">
              M
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-[#1A1A1A] truncate">
                Matus Behun
              </p>
              <p class="text-xs text-[#78716C] truncate">
                matusbehun03@gmail.com
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
