import { Box, Typography, Paper, Grid, Avatar } from "@mui/material";

export default function DashboardHome() {
  return (
    <Box sx={{ color: "#fff" }}>
      
      {/* Tarjetas principales */}
      <Grid container spacing={3}>
        {[ 
          { title: "Pagos Pendientes", value: "$12,500" },
          { title: "Rutas Activas", value: "5" },
          { title: "Clientes con Deuda", value: "32" },
        ].map((card, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <Paper sx={{ p: 3, bgcolor: "#19232f", borderRadius: 3 }}>
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
              <td>
                <span style={{
                  padding: "4px 12px",
                  background: "#2a4052",
                  borderRadius: 8
                }}>
                  En Progreso
                </span>
              </td>
              <td>8</td>
              <td>2</td>
              <td>10</td>
            </tr>

            <tr>
              <td>Ruta 2</td>
              <td>
                <span style={{
                  padding: "4px 12px",
                  background: "#1b5134",
                  borderRadius: 8
                }}>
                  Completada
                </span>
              </td>
              <td>12</td>
              <td>0</td>
              <td>12</td>
            </tr>

            <tr>
              <td>Ruta 3</td>
              <td>
                <span style={{
                  padding: "4px 12px",
                  background: "#51311b",
                  borderRadius: 8
                }}>
                  Pendiente
                </span>
              </td>
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
  );
}
