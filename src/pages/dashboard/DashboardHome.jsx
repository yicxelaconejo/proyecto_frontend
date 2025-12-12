import { Box, Typography, Paper, Grid } from "@mui/material";

export default function DashboardPage() {
  return (
    <Box sx={{ p: 4, bgcolor: "#0d141c", color: "#fff", minHeight: "100vh" }}>
      
      {/* CARDS SUPERIORES */}
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
                bgcolor: "#1a2532",
                borderRadius: 2,
                color: "#fff",
              }}
            >
              <Typography sx={{ opacity: 0.7, fontSize: 14 }}>
                {card.title}
              </Typography>
              <Typography variant="h5" fontWeight="bold" mt={1}>
                {card.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* -------- TABLA -------- */}
      <Typography variant="h6" fontWeight="bold" sx={{ mt: 5, mb: 2 }}>
        Estado de Rutas
      </Typography>

      <Paper
        sx={{
          bgcolor: "#1a2532",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <table
          style={{
            width: "100%",
            color: "#fff",
            borderCollapse: "collapse",
            fontSize: 15,
          }}
        >
          <thead>
            <tr
              style={{
                background: "#16202a",
                height: 50,
                textAlign: "left",
                borderBottom: "1px solid #233040",
              }}
            >
              <th style={{ paddingLeft: 20 }}>Ruta</th>
              <th>Estado</th>
              <th>Pagos Exitosos</th>
              <th>Pagos Fallidos</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {[
              {
                ruta: "Ruta 1",
                estado: "En Progreso",
                color: "#2b4155",
                e: 8,
                f: 2,
                t: 10,
              },
              {
                ruta: "Ruta 2",
                estado: "Completada",
                color: "#1e5c3d",
                e: 12,
                f: 0,
                t: 12,
              },
              {
                ruta: "Ruta 3",
                estado: "Pendiente",
                color: "#6b4a2e",
                e: 0,
                f: 0,
                t: 0,
              },
            ].map((r, i) => (
              <tr
                key={i}
                style={{
                  height: 55,
                  borderBottom: "1px solid #233040",
                }}
              >
                <td style={{ paddingLeft: 20 }}>{r.ruta}</td>

                <td>
                  <span
                    style={{
                      padding: "6px 14px",
                      background: r.color,
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    {r.estado}
                  </span>
                </td>

                <td>{r.e}</td>
                <td>{r.f}</td>
                <td>{r.t}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>

      {/* -------- MÉTRICAS CLAVE -------- */}
      <Typography variant="h6" fontWeight="bold" sx={{ mt: 5, mb: 2 }}>
        Métricas Clave
      </Typography>

      <Grid container spacing={3}>
        {/* CARD 1: Barras */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              bgcolor: "#1a2532",
              borderRadius: 2,
            }}
          >
            <Typography sx={{ opacity: 0.7 }}>Pagos por Estado</Typography>
            <Typography variant="h5" fontWeight="bold">$8,500</Typography>
            <Typography sx={{ color: "#4bb543", mt: 1 }}>
              Este Mes +15%
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mt: 3,
              }}
            >
              {[80, 60, 40].map((h, i) => (
                <Box key={i} sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      width: 30,
                      height: h,
                      backgroundColor: "#2d3a47",
                      borderRadius: 1,
                    }}
                  />
                  <Typography mt={1} sx={{ opacity: 0.7, fontSize: 13 }}>
                    {["Exitosos", "Fallidos", "Pendientes"][i]}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* CARD 2: Línea */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              bgcolor: "#1a2532",
              borderRadius: 2,
            }}
          >
            <Typography sx={{ opacity: 0.7 }}>Tendencia de Pagos</Typography>
            <Typography variant="h5" fontWeight="bold">$15,000</Typography>
            <Typography sx={{ color: "#4bb543", mt: 1 }}>
              Este Año +20%
            </Typography>

            {/* GRAFICA SVG */}
            <Box sx={{ mt: 3 }}>
              <svg width="100%" height="120">
                <path
                  d="M10 80 C 50 60, 90 100, 130 70 S 210 90, 260 50 S 330 100, 380 60"
                  stroke="#7aa6ff"
                  strokeWidth="3"
                  fill="transparent"
                  opacity="0.8"
                />
              </svg>
            </Box>

            {/* Meses */}
            <Box sx={{ display: "flex", justifyContent: "space-between", opacity: 0.7, fontSize: 13 }}>
              {["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
