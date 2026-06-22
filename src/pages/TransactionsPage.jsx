// Página de transacciones. Muestra la lista completa y permite crear, editar y eliminar.
import Header from "../components/layout/Header.jsx";
import { LogIn, Plus } from "lucide-react";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import TransactionItem from "../components/transactions/TransactionItem.jsx";
import { useState } from "react";

const colorPorCategoria = {
  //* Esto ha de sacarse dekl backend en un futuro.
  Alimentación: "bg-stone-500",
  Suscripciones: "bg-blue-500",
  Transporte: "bg-amber-500",
  Trabajo: "bg-emerald-500",
  Restaurantes: "bg-rose-500",
  Hogar: "bg-orange-500",
  Ocio: "bg-violet-500",
};

export default function TransactionsPage() {
  const numTransacciones = 5; // Número de transacciones (para mostrar en el título)
  const fecha = "junio 2026";

  const infoTransaccion = [
    {
      id: 1,
      tipo: "gasto",
      date: "2026-06-11",
      categoria: "Hogar",
      simbolo: "HO",
      descripcion: "Alquiler",
      monto: -650,
    },
    {
      id: 2,
      tipo: "ingreso",
      date: "2026-06-18",
      categoria: "Trabajo",
      simbolo: "TR",
      descripcion: "Nómina mensual",
      monto: 1600,
    },
    {
      id: 3,
      tipo: "gasto",
      date: "2026-06-21",
      categoria: "Ocio",
      simbolo: "OC",
      descripcion: "Cena restaurante",
      monto: -87,
    },
    {
      id: 4,
      tipo: "gasto",
      date: "2026-06-01",
      categoria: "Ocio",
      simbolo: "OC",
      descripcion: "Cena restaurante",
      monto: -87,
    },
    {
      id: 5,
      tipo: "gasto",
      date: "2026-06-07",
      categoria: "Ocio",
      simbolo: "OC",
      descripcion: "Cena restaurante",
      monto: -87,
    },
    {
      id: 6,
      tipo: "gasto",
      date: "2026-06-02",
      categoria: "Ocio",
      simbolo: "OC",
      descripcion: "Cena restaurante",
      monto: -87,
    },
  ];

  const [buscar, setBuscar] = useState("");
  const [filtroGasto, setFiltroGasto] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState(
    "Todas las categorías",
  );

  const handleBuscar = (e) => {
    setBuscar(event.target.e);
    //TODO Mostrar solo las transacciones con la palabra escrita
    return {
      //Devolvemos solo lo que buscamos
    };
  };

  // Esta funcion eds solo para guardar la seleccion del usuario.
  const handleFiltrogasto = (e) => {
    setFiltroGasto(e.target.value);
  };

  const groupByDate = (trans) => {
    //Agrupamos por fechas con el reduce
    return trans.reduce((grupos, transaccion) => {
      const fecha = infoTransaccion.fecha;
      if (!grupos[transaccion.date]) grupos[transaccion.date] = [];
      grupos[transaccion.date].push(transaccion);
      return grupos;
    }, {});
  };

  const formatDate = (fechaString) => {
    const date = new Date(fechaString + "T00:00:00"); // Evitamos desface de zona horaria
    return date
      .toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .toUpperCase();
  };

  //Formato del monto
  const formatoMonto = (monto) => {
    const abs = Math.abs(monto).toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return monto >= 0 ? `+€${abs}` : `-€${abs}`;
  };

  //Si no sta ordenado por fechas lo he de ordenar primero
  const sorted = [...infoTransaccion].sort(
    //HAgo new date porque date es un string y si los resto da NaN
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const filtradoTransacciones = sorted.filter((transaccion) => {
    if (filtroGasto === "Gastos" && transaccion.tipo === "gasto") {
      return true;
    } else if (filtroGasto === "Ingresos" && transaccion.tipo === "ingreso") {
      return true;
    } else if (filtroGasto === "Todos") {
      return true;
    }
  });

  const agrupado = groupByDate(filtradoTransacciones);

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="lg:ml-10 flex-1 px-4 py-4 lg:px-8 lg:py-8">
        <div id="cabecera" className="flex justify-between">
          <div>
            <h1
              className="text-2xl font-semibold text-[#1A1A1A] tracking-tight
            "
            >
              Transacciones
            </h1>
            <p className="text-sm text-[#78716C] mt-0.5">
              {numTransacciones} transacciones en {fecha}
            </p>
          </div>
          <div>
            <Button
              text="Nueva transacción"
              style="secondary"
              onClick={() => {
                //TODO Lógica para crear una nueva transacción
                //TODO Frontend del boton
              }}
            />
          </div>
        </div>

        <div id="filtros" className="flex justify-between">
          <div
            id="meses"
            //en la base de datos se agruparan por mes las cosas por lo que saldra aqui lo de cada mes
            className="flex items-center gap-1 w-fit border border-[#EAEAEA] rounded-md bg-[#f4dbdb]"
          >
            <button className="px-3 py-2 text-[#78716C] hover:text-[#1A1A1A] transition-colors border-r-[#EAEAEA]">
              Atras
            </button>
            <span class="px-2 text-sm font-medium text-[#1A1A1A] border-rl  whitespace-nowrap">
              Mayo 2026
            </span>
            <button className="px-3 py-2 text-[#78716C] hover:text-[#1A1A1A] transition-colors border-r-[#EAEAEA]">
              Alante
            </button>
          </div>
          <div id="busqueda">
            <input
              className="w-fit pl-9 pr-4 py-2 text-sm border border-[#EAEAEA] rounded-md bg-white text-[#1A1A1A] placeholder-[#B0A8A0] focus:outline-none focus:ring-2 focus:ring-[#B45309] focus:border-transparent"
              type="text"
              placeholder="Buscar transacción... "
              value={buscar}
              onChange={handleBuscar}
            />
          </div>
          <div id="gastos">
            <select
              name="gastos"
              id="gastos"
              onChange={handleFiltrogasto}
              placeholder="Todos"
            >
              <option value="Todos" de>
                Todos
              </option>
              <option value="Gastos">Gastos</option>
              <option value="Ingresos">Ingresos</option>
            </select>
          </div>
          <div id="cat">
            <select name="gategorias" id="gategorias">
              <option value="Todas" de>
                Todas las categorias
              </option>
              {Object.entries(colorPorCategoria).map(([cat, valor]) => {
                return (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div id="resumen">
          <div className="bg-white border border-[#EAEAEA] rounded-lg mt-5">
            {
              // Primero iteraos por fechas
            }
            {Object.entries(agrupado).map(([fecha, i]) => (
              <div
                key={fecha}
                class="px-6 py-3 border-b border-[#EAEAEA] bg-[#FAFAF8] "
              >
                <div className="px-6 py-3 border-b border-[#EAEAEA] bg-[#FAFAF8]">
                  <span class="text-xs font-medium text-[#78716C] uppercase tracking-widest">
                    {formatDate(fecha)}
                  </span>
                </div>
                {
                  //Luego iteramos por transacciones
                  i.map((i) => (
                    <div className="divide-y divide-[#EAEAEA]">
                      <div
                        key={i.id}
                        className=" flex items-center justify-between px-6 py-3.5 hover:bg-[#FAFAF8] transition-colors groupflex"
                      >
                        <TransactionItem
                          simbolo={i.simbolo}
                          titulo={i.descripcion}
                          cat={i.categoria}
                          color={
                            colorPorCategoria[i.categoria] ?? "bg-stone-400"
                          }
                          tipoGasto={i.tipo}
                        />
                        <span
                          className={`text-sm font-semibold tabular-nums${i.monto >= 0 ? "text-emerald-600" : "text-rose-500"}`}
                        >
                          {formatoMonto(i.monto)}
                        </span>
                      </div>
                    </div>
                  ))
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
