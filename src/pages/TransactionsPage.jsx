// Página de transacciones. Muestra la lista completa y permite crear, editar y eliminar.
import Header from "../components/layout/Header.jsx";
import { LogIn, Plus } from "lucide-react";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import TransactionItem from "../components/transactions/TransactionItem.jsx";

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

  //Si no sta ordenado por fechas lo he de ordenar primero
  const sorted = [...infoTransaccion].sort(
    //HAgo new date porque date es un string y si los resto da NaN
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const agrupado = groupByDate(sorted);

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
        <div id="resumen">
          <div>
            {
              // Primero iteraos por fechas
            }
            {Object.entries(agrupado).map(([fecha, i]) => (
              <div key={fecha}>
                <p>{formatDate(fecha)}</p>
                {
                  //Luego iteramos por transacciones
                  i.map((i) => (
                    <div key={i.id}>
                      <TransactionItem
                        simbolo={i.simbolo}
                        titulo={i.descripcion}
                        cat={i.categoria}
                      />
                      <span
                        className={`text-sm font-semibold tabular-nums${i.monto >= 0 ? "text-emerald-600" : "text-rose-500"}`}
                      >
                        {}
                      </span>
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
