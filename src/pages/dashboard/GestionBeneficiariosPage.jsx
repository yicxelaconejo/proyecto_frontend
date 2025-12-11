import { useState } from "react";
import { Box, Typography, TextField, MenuItem, Button, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function GestionBeneficiariosPage() {
  const navigate = useNavigate();

  const [busqueda, setBusqueda] = useState("");
  const [estadoFiltro, setEstadoFiltro] = useState("");

  // ⬅ Beneficiarios de ejemplo
  const beneficiarios = [
    {
      nombre: "Carlos Ramírez",
      documento: "10124567",
      parentesco: "Hijo",
      estado: "Activo",
    },
    {
      nombre: "Ana Torres",
      documento: "7541223",
      parentesco: "Madre",
      estado: "Inactivo",
    },
  ];

  const filtrados = beneficiarios.filter(
    (b) =>
      b.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (estadoFiltro === "" || b.estado === estadoFiltro)
  );

  // ⭐ DOCUMENTO DEL TITULAR (ejemplo)
  // En tu versión real este documento llegará desde params o contexto
  const documentoTitular = "10124567"; 

  return (
    <Box sx={{ p: 3, color: "#fff" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
        Gestión de Beneficiarios
      </Typography>
      <Typography sx={{ opacity: 0.7, mb: 4 }}>
        Administra los beneficiarios registrados.
      </Typography>

      <Paper sx={{ p: 2, mb: 4, bgcolor: "#0c1622" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Buscar beneficiario"
            variant="outlined"
            size="small"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            sx={{
              input: { color: "#fff" },
              label: { color: "#ccc" },
              "& .MuiOutlinedInput-root fieldset": { borderColor: "#233041" },
            }}
          />

          <TextField
            select
            label="Estado"
            size="small"
            value={estadoFiltro}
            onChange={(e) => setEstadoFiltro(e.target.value)}
            sx={{
              minWidth: 160,
              input: { color: "#fff" },
              label: { color: "#ccc" },
              "& .MuiOutlinedInput-root fieldset": { borderColor: "#233041" },
            }}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Activo">Activo</MenuItem>
            <MenuItem value="Inactivo">Inactivo</MenuItem>
          </TextField>

          <Box sx={{ flexGrow: 1 }} />

          {/* ⭐ NAVEGACIÓN AJUSTADA */}
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() =>
              navigate(`/dashboard/clientes/${documentoTitular}/beneficiarios/registrar`)
            }
          >
            Añadir Beneficiario
          </Button>
        </Box>
      </Paper>

      <Paper sx={{ bgcolor: "#19232f", borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>Nombre</TableCell>
              <TableCell sx={{ color: "#fff" }}>Documento</TableCell>
              <TableCell sx={{ color: "#fff" }}>Parentesco</TableCell>
              <TableCell sx={{ color: "#fff" }}>Estado</TableCell>
              <TableCell sx={{ color: "#fff" }} align="center">
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filtrados.map((b, idx) => (
              <TableRow key={idx} hover>
                <TableCell sx={{ color: "#fff" }}>{b.nombre}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{b.documento}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{b.parentesco}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{b.estado}</TableCell>

                <TableCell align="center">
                  <IconButton sx={{ color: "#3b82f6" }}>
                    <VisibilityIcon />
                  </IconButton>

                  <IconButton sx={{ color: "#fbbf24" }}>
                    <EditIcon />
                  </IconButton>

                  <IconButton sx={{ color: b.estado === "Activo" ? "#22c55e" : "#ef4444" }}>
                    {b.estado === "Activo" ? <ToggleOnIcon /> : <ToggleOffIcon />}
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
