import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function WhatsAppGestionPage() {
  const { documento } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);

  const datos = [
    {
      fecha: "15/07/2024",
      cliente: "Familia Rodríguez",
      mensaje:
        "Recordatorio de pago vencido. Por favor, regularizar a la brevedad.",
    },
    {
      fecha: "12/07/2024",
      cliente: "Familia Martínez",
      mensaje: "Pago vencido. Contactar para coordinar el pago.",
    },
    {
      fecha: "10/07/2024",
      cliente: "Familia Lopez",
      mensaje: "Recordatorio de pago pendiente. Consultar opciones de pago.",
    },
    {
      fecha: "08/07/2024",
      cliente: "Familia Perez",
      mensaje: "Pago vencido. Urgente regularizar la situación.",
    },
    {
      fecha: "05/07/2024",
      cliente: "Familia Sanchez",
      mensaje: "Recordatorio de pago vencido. Contactar para más información.",
    },
  ];

  return (
    <Box sx={{ p: 3, color: "#fff" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
        Gestión de Recordatorios WhatsApp
      </Typography>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        sx={{
          mb: 3,
          "& .MuiTab-root": { color: "#ccc" },
          "& .Mui-selected": { color: "#fff !important" },
          "& .MuiTabs-indicator": { backgroundColor: "#fff" },
        }}
      >
        <Tab label="Pago Vencido" />
        <Tab label="Pago por Vencer" />
        <Tab label="Recordatorio Vence Hoy" />
      </Tabs>

      {/* Tabla */}
      <Paper sx={{ bgcolor: "#0d1624", borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>Fecha</TableCell>
              <TableCell sx={{ color: "#fff" }}>Cliente</TableCell>
              <TableCell sx={{ color: "#fff" }}>Mensaje</TableCell>
              <TableCell sx={{ color: "#fff" }} align="center">
                Acción
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {datos.map((d, i) => (
              <TableRow key={i}>
                <TableCell sx={{ color: "#fff" }}>{d.fecha}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{d.cliente}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{d.mensaje}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    sx={{ textTransform: "none", bgcolor: "#1f2937" }}
                    onClick={() =>
                      navigate(
                        `/dashboard/clientes/${documento}/pagos/registrar`,
                        {
                          state: { nombreCliente: d.cliente }, // <-- enviamos el nombre del cliente
                        }
                      )
                    }
                  >
                    Pago
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
