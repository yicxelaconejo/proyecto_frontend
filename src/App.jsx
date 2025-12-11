import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import RutasPage from "./pages/dashboard/RutasPage";
import ClientesPage from "./pages/dashboard/ClientesPage";
import RegistrarClientePage from "./pages/dashboard/RegistrarClientePage";

// ⭐ NUEVAS IMPORTACIONES
import VerDetallesTitularPage from "./pages/dashboard/VerDetallesTitularPage";
import RegistrarDocumentoPage from "./pages/dashboard/RegistrarDocumentoPage";
import RegistrarBeneficiarioPage from "./pages/dashboard/RegistrarBeneficiarioPage";

// ⭐ ⭐ IMPORTACIÓN QUE SE AGREGA
import GestionBeneficiariosPage from "./pages/dashboard/GestionBeneficiariosPage";

function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ⭐ HOME PAGE */}
        <Route
          path="/"
          element={
            <HomeLayout>
              <HomePage />
            </HomeLayout>
          }
        />

        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* ⭐ DASHBOARD */}
        <Route path="/dashboard" element={<DashboardLayout />}>

          {/* Inicio del Dashboard */}
          <Route index element={<DashboardHome />} />

          {/* Rutas */}
          <Route path="rutas" element={<RutasPage />} />

          {/* Clientes */}
          <Route path="clientes" element={<ClientesPage />} />

          {/* Registrar Cliente */}
          <Route path="clientes/registrar" element={<RegistrarClientePage />} />

          {/* Ver Detalles del Cliente */}
          <Route
            path="clientes/:documento/detalles"
            element={<VerDetallesTitularPage />}
          />

          {/* Registrar Documentos */}
          <Route
            path="clientes/:documento/documentos"
            element={<RegistrarDocumentoPage />}
          />

          {/* ⭐ NUEVA RUTA: Gestión de Beneficiarios */}
          <Route
            path="clientes/:documento/beneficiarios"
            element={<GestionBeneficiariosPage />}
          />

          {/* ⭐ NUEVA RUTA: Registrar Beneficiario */}
          <Route
            path="clientes/:documento/beneficiarios/registrar"
            element={<RegistrarBeneficiarioPage />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
