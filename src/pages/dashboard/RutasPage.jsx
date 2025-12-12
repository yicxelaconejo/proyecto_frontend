import { useState } from "react";
import { Box, Typography, TextField, MenuItem, Button, Paper } from "@mui/material";

export default function RutasPage() {
  const [mostrarMapa, setMostrarMapa] = useState(false);

  const handleOptimizar = () => {
    setMostrarMapa(true);
  };

  // Props para los select, fondo negro y letra blanca
  const menuProps = {
    PaperProps: {
      sx: {
        bgcolor: "#0c1622", // Fondo negro del dropdown
        "& .MuiMenuItem-root": {
          color: "#fff", // Letra blanca
          "&:hover": {
            bgcolor: "#1a2533", // Hover oscuro para resaltar
          },
        },
      },
    },
  };

  return (
    <Box sx={{ color: "#fff", maxWidth: 900, mx: "auto" }}>
      {/* Tarjeta Principal */}
      <Paper
        sx={{
          p: 3,
          bgcolor: "#0c1622",
          borderRadius: 4,
          border: "1px solid #233041",
          color: "#fff",
        }}
      >
        {/* Título */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#fff" }}>
          Planificación de Rutas
        </Typography>

        {/* Barra de búsqueda */}
        <TextField
          fullWidth
          placeholder="🔍  Buscar rutas..."
          sx={{
            mb: 3,
            bgcolor: "#0f1a25",
            borderRadius: 2,
            input: { color: "#fff" },
            "& .MuiOutlinedInput-root fieldset": { borderColor: "#233041" },
            "& .MuiInputLabel-root": { color: "#fff" },
          }}
        />

        {/* Filtros */}
        <Typography fontWeight="bold" sx={{ mb: 1, color: "#fff" }}>
          Filtros
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2,
            mb: 2,
          }}
        >
          <TextField
            select
            label="Zona o Barrio"
            SelectProps={menuProps}
            sx={{
              bgcolor: "#0f1a25",
              borderRadius: 2,
              "& .MuiOutlinedInput-root fieldset": { borderColor: "#233041" },
              "& label": { color: "#fff" },
              "& .MuiSelect-icon": { color: "#fff" },
              input: { color: "#fff" },
            }}
          >
            <MenuItem value="centro">Centro</MenuItem>
            <MenuItem value="norte">Norte</MenuItem>
            <MenuItem value="sur">Sur</MenuItem>
          </TextField>

          <TextField
            select
            label="Estado"
            SelectProps={menuProps}
            sx={{
              bgcolor: "#0f1a25",
              borderRadius: 2,
              "& .MuiOutlinedInput-root fieldset": { borderColor: "#233041" },
              "& label": { color: "#fff" },
              "& .MuiSelect-icon": { color: "#fff" },
              input: { color: "#fff" },
            }}
          >
            <MenuItem value="activa">Activa</MenuItem>
            <MenuItem value="completada">Completada</MenuItem>
            <MenuItem value="pendiente">Pendiente</MenuItem>
          </TextField>

          <TextField
            type="date"
            label="Fecha"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              sx: {
                svg: { color: "#fff" }, // Icono de calendario blanco
              },
            }}
            sx={{
              bgcolor: "#0f1a25",
              borderRadius: 2,
              "& .MuiOutlinedInput-root fieldset": { borderColor: "#233041" },
              "& label": { color: "#fff" },
              input: { color: "#fff" },
              gridColumn: { md: "1 / 3" },
            }}
          />
        </Box>

        {/* Botón Optimizar */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleOptimizar}
          sx={{
            bgcolor: "#1976d2",
            borderRadius: 2,
            py: 1.2,
            textTransform: "none",
            fontWeight: "bold",
            color: "#fff",
            "&:hover": { bgcolor: "#1565c0" },
          }}
        >
          Optimizar Ruta
        </Button>
      </Paper>

      {/* Mostrar imagen del mapa */}
      {mostrarMapa && (
        <Paper
          sx={{
            mt: 3,
            p: 1,
            borderRadius: 3,
            bgcolor: "#0c1622",
          }}
        >
          <img
            src="/mapa.png"
            alt="mapa de ruta"
            style={{
              width: "100%",
              borderRadius: 12,
              display: "block",
            }}
          />
        </Paper>
      )}
    </Box>
  );
}
