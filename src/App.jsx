import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import RutasPage from "./pages/dashboard/RutasPage";
import ClientesPage from "./pages/dashboard/ClientesPage";
import RegistrarClientePage from "./pages/dashboard/RegistrarClientePage";

// Páginas relacionadas con Clientes
import VerDetallesTitularPage from "./pages/dashboard/VerDetallesTitularPage";
import RegistrarDocumentoPage from "./pages/dashboard/RegistrarDocumentoPage";

// Gestión y Registro de Beneficiarios
import GestionBeneficiariosPage from "./pages/dashboard/GestionBeneficiariosPage";
import RegistrarBeneficiarioPage from "./pages/dashboard/RegistrarBeneficiarioPage";

// Páginas de WhatsApp
import WhatsAppEnviarMensajePage from "./pages/dashboard/WhatsAppEnviarMensajePage";
import WhatsAppGestionPage from "./pages/dashboard/WhatsAppGestionPage";

// Pagos
import RegistrarPagoPage from "./pages/dashboard/RegistrarPagoPage";

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

        {/* HOME */}
        <Route
          path="/"
          element={
            <HomeLayout>
              <HomePage />
            </HomeLayout>
          }
        />

        {/* LOGIN */}
        <Route path="/login" element={<LoginPage />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<DashboardLayout />}>

          {/* Inicio */}
          <Route index element={<DashboardHome />} />

          {/* Rutas */}
          <Route path="rutas" element={<RutasPage />} />

          {/* Clientes */}
          <Route path="clientes" element={<ClientesPage />} />
          <Route path="clientes/registrar" element={<RegistrarClientePage />} />

          {/* Ver Detalles */}
          <Route
            path="clientes/:documento/detalles"
            element={<VerDetallesTitularPage />}
          />

          {/* Documentos */}
          <Route
            path="clientes/:documento/documentos"
            element={<RegistrarDocumentoPage />}
          />

          {/* Beneficiarios */}
          <Route
            path="clientes/:documento/beneficiarios"
            element={<GestionBeneficiariosPage />}
          />
          <Route
            path="clientes/:documento/beneficiarios/registrar"
            element={<RegistrarBeneficiarioPage />}
          />

          {/* WhatsApp - envío directo */}
          <Route
            path="clientes/:documento/whatsapp/enviar"
            element={<WhatsAppEnviarMensajePage />}
          />

          {/* WhatsApp - gestión */}
          <Route path="clientes/whatsapp" element={<WhatsAppGestionPage />} />

          {/* Registrar Pago */}
          <Route
            path="clientes/:documento/pagos/registrar"
            element={<RegistrarPagoPage />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
