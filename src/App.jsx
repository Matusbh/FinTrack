import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import TransactionsPage from "./pages/TransactionsPage.jsx";
function App() {
  return (
    <Layout>
      <Routes>
        {
          //ruta por defecto la que esta indexada
        }
        <Route index element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/trnasactions" element={<TransactionsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
