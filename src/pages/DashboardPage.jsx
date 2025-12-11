import { Box, Typography, Paper, Grid, Avatar } from "@mui/material";
import { Home, Map, People, Payment, Build, Person, BarChart, Logout } from "@mui/icons-material";

export default function DashboardPage() {
  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#0d141c", color: "#fff" }}>

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

        {/* Items del menú */}
        {[
          { icon: <Home />, text: "Inicio" },
          { icon: <Map />, text: "Rutas" },
          { icon: <People />, text: "Clientes" },
          { icon: <Payment />, text: "Pagos" },
          { icon: <Build />, text: "Servicios" },
          { icon: <Person />, text: "Usuarios" },
          { icon: <BarChart />, text: "Reportes" },
        ].map((item, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 1.2,
              mb: 1,
              borderRadius: 2,
              bgcolor: i === 0 ? "#1c2833" : "transparent",
              cursor: "pointer",
              "&:hover": { bgcolor: "#1c2833" },
            }}
          >
            {item.icon}
            <Typography>{item.text}</Typography>
          </Box>
        ))}

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer" }}>
          <Logout />
          <Typography>Cerrar Sesión</Typography>
        </Box>
      </Box>

      {/* Contenido Principal */}
      <Box sx={{ flex: 1, p: 4, overflowY: "auto" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography variant="h4" fontWeight="bold">Resumen</Typography>

          <Avatar src="https://i.pravatar.cc/150" sx={{ width: 45, height: 45 }} />
        </Box>

        {/* Tarjetas principales */}
        <Grid container spacing={3}>
          {[
            { title: "Pagos Pendientes", value: "$12,500" },
            { title: "Rutas Activas", value: "5" },
            { title: "Clientes con Deuda", value: "32" },
          ].map((card, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Paper
                sx={{
                  p: 3,
                  bgcolor: "#19232f",
                  borderRadius: 3,
                  color: "#fff",
                }}
              >
                <Typography sx={{ opacity: 0.7 }}>{card.title}</Typography>
                <Typography variant="h5" fontWeight="bold" mt={1}>
                  {card.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Tabla de rutas */}
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 5, mb: 2 }}>
          Estado de Rutas
        </Typography>

        <Paper sx={{ bgcolor: "#19232f", borderRadius: 3, p: 2 }}>
          <table style={{ width: "100%", color: "#fff" }}>
            <thead>
              <tr style={{ opacity: 0.7 }}>
                <th>Ruta</th>
                <th>Estado</th>
                <th>Pagos Exitosos</th>
                <th>Pagos Fallidos</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ruta 1</td>
                <td><span style={{ padding: "4px 12px", background: "#2a4052", borderRadius: 8 }}>En Progreso</span></td>
                <td>8</td>
                <td>2</td>
                <td>10</td>
              </tr>

              <tr>
                <td>Ruta 2</td>
                <td><span style={{ padding: "4px 12px", background: "#1b5134", borderRadius: 8 }}>Completada</span></td>
                <td>12</td>
                <td>0</td>
                <td>12</td>
              </tr>

              <tr>
                <td>Ruta 3</td>
                <td><span style={{ padding: "4px 12px", background: "#51311b", borderRadius: 8 }}>Pendiente</span></td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </Paper>

        {/* Métricas */}
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 5, mb: 2 }}>
          Métricas Clave
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, bgcolor: "#19232f", borderRadius: 3 }}>
              <Typography sx={{ opacity: 0.7 }}>Pagos por Estado</Typography>
              <Typography variant="h5" fontWeight="bold">$8,500</Typography>
              <Typography sx={{ color: "#4bb543", mt: 1 }}>Este Mes +15%</Typography>

              {/* Mini barras */}
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                <Box sx={{ width: 30, height: 120, bgcolor: "#2e3b4a", borderRadius: 1 }} />
                <Box sx={{ width: 30, height: 80, bgcolor: "#2e3b4a", borderRadius: 1 }} />
                <Box sx={{ width: 30, height: 50, bgcolor: "#2e3b4a", borderRadius: 1 }} />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, bgcolor: "#19232f", borderRadius: 3 }}>
              <Typography sx={{ opacity: 0.7 }}>Tendencia de Pagos</Typography>
              <Typography variant="h5" fontWeight="bold">$15,000</Typography>
              <Typography sx={{ color: "#4bb543", mt: 1 }}>Este Año +20%</Typography>

              {/* Mini gráfico simulado */}
              <Box sx={{ mt: 3 }}>
                <img
                  src="https://i.imgur.com/JlFfQ9U.png"
                  alt="graph"
                  style={{ width: "100%", opacity: 0.7 }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
