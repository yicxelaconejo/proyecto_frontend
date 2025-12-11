import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function ClientesPage() {
  const navigate = useNavigate();

  const [estadoFiltro, setEstadoFiltro] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const clientes = [
    {
      nombre: "Juan Pérez",
      documento: "1032456",
      telefono: "3105558899",
      estado: "Activo",
    },
    {
      nombre: "María Gómez",
      documento: "9845123",
      telefono: "3128897744",
      estado: "Pendiente",
    },
  ];

  const clientesFiltrados = clientes.filter(
    (c) =>
      c.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (estadoFiltro === "" || c.estado === estadoFiltro)
  );

  // ⭐ REDIRECCIÓN CORRECTA A GESTIÓN DE BENEFICIARIOS
  const handleRegistrarBeneficiario = (documentoCliente) => {
    navigate(`/dashboard/clientes/${documentoCliente}/beneficiarios`);
  };

  return (
    <Box sx={{ p: 3, color: "#fff" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
        Gestión de Clientes
      </Typography>
      <Typography sx={{ opacity: 0.7, mb: 4 }}>
        Administra los clientes registrados.
      </Typography>

      {/* Filtros */}
      <Paper sx={{ p: 2, mb: 4, bgcolor: "#0c1622" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <TextField
            label="Buscar cliente"
            variant="outlined"
            size="small"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            sx={{
              minWidth: 200,
              input: { color: "#fff" },
              label: { color: "#ccc" },
              "& .MuiOutlinedInput-root fieldset": { borderColor: "#233041" },
            }}
          />

          <TextField
            select
            label="Estado"
            variant="outlined"
            size="small"
            value={estadoFiltro}
            onChange={(e) => setEstadoFiltro(e.target.value)}
            sx={{
              minWidth: 160,
              input: { color: "#fff" },
              label: { color: "#ccc" },
              "& .MuiSelect-icon": { color: "#fff" },
              "& .MuiOutlinedInput-root fieldset": { borderColor: "#233041" },
            }}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Activo">Activo</MenuItem>
            <MenuItem value="Pendiente">Pendiente</MenuItem>
          </TextField>

          <Box sx={{ flexGrow: 1 }} />

          {/* Botón añadir cliente */}
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ textTransform: "none" }}
            onClick={() => navigate("/dashboard/clientes/registrar")}
          >
            Añadir Cliente
          </Button>
        </Box>
      </Paper>

      {/* Tabla */}
      <Paper sx={{ bgcolor: "#19232f", borderRadius: 2, overflowX: "auto" }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>Nombre</TableCell>
              <TableCell sx={{ color: "#fff" }}>Documento</TableCell>
              <TableCell sx={{ color: "#fff" }}>Teléfono</TableCell>
              <TableCell sx={{ color: "#fff" }}>Estado</TableCell>
              <TableCell sx={{ color: "#fff" }} align="center">
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {clientesFiltrados.map((c, idx) => (
              <TableRow key={idx} hover>
                <TableCell sx={{ color: "#fff" }}>{c.nombre}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{c.documento}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{c.telefono}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{c.estado}</TableCell>

                <TableCell align="center" sx={{ color: "#fff" }}>
                  <IconButton
                    color="primary"
                    onClick={() =>
                      navigate(`/dashboard/clientes/${c.documento}/detalles`)
                    }
                  >
                    <VisibilityIcon />
                  </IconButton>

                  <IconButton color="warning">
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    sx={{ color: "#ff4444" }}
                    onClick={() =>
                      navigate(`/dashboard/clientes/${c.documento}/documentos`)
                    }
                  >
                    <PictureAsPdfIcon />
                  </IconButton>

                  <IconButton sx={{ color: "#25D366" }}>
                    <WhatsAppIcon />
                  </IconButton>

                  {/* ⭐ Botón que redirige a Gestión de Beneficiarios */}
                  <IconButton
                    sx={{ color: "#4caf50" }}
                    onClick={() => handleRegistrarBeneficiario(c.documento)}
                  >
                    <PersonAddIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
