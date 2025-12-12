import { Box, Typography, Avatar } from "@mui/material";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

import {
  Home,
  Map,
  People,
  Payment,
  Build,
  Person,
  BarChart,
  Logout,
} from "@mui/icons-material";

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate(); // 👈 Hook para navegación

  const menuItems = [
    { icon: <Home />, text: "Inicio", path: "/dashboard" },
    { icon: <Map />, text: "Rutas", path: "/dashboard/rutas" },
    { icon: <People />, text: "Clientes", path: "/dashboard/clientes" },
    { icon: <Payment />, text: "Pagos", path: "/dashboard/clientes/whatsapp" },
    // { icon: <Build />, text: "Servicios", path: "/dashboard/servicios" },
    // { icon: <Person />, text: "Usuarios", path: "/dashboard/usuarios" },
    // { icon: <BarChart />, text: "Reportes", path: "/dashboard/reportes" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        bgcolor: "#0d141c",
        color: "#fff",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          bgcolor: "#0a0f18",
          p: 3,
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid #1c2833",
        }}
      >
        <Typography sx={{ fontSize: 22, fontWeight: "bold", mb: 4 }}>
          Cobranzas
        </Typography>

        {/* Items menú */}
        {menuItems.map((item, i) => {
          const active = location.pathname === item.path;

          return (
            <Box
              key={i}
              component={Link}
              to={item.path}
              sx={{
                textDecoration: "none",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 1.2,
                mb: 1,
                borderRadius: 2,
                bgcolor: active ? "#1c2833" : "transparent",
                cursor: "pointer",
                "&:hover": { bgcolor: "#1c2833" },
              }}
            >
              {item.icon}
              <Typography>{item.text}</Typography>
            </Box>
          );
        })}

        <Box sx={{ flexGrow: 1 }} />

        {/* Cerrar Sesión */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            cursor: "pointer",
            p: 1,
            borderRadius: 2,
            "&:hover": { bgcolor: "#1c2833" },
          }}
          onClick={() => navigate("/")} // 👈 Navega a Home
        >
          <Logout />
          <Typography>Cerrar Sesión</Typography>
        </Box>
      </Box>

      {/* Contenido dinámico */}
      <Box sx={{ flex: 1, p: 4, overflowY: "auto" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            Panel
          </Typography>

          <Avatar
            src="https://i.pravatar.cc/150"
            sx={{ width: 45, height: 45 }}
          />
        </Box>
        <Outlet /> {/* 👉 Aquí se cargan las páginas */}
      </Box>
    </Box>
  );
}
