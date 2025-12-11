import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Paper,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function VerDetallesTitularPage() {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  // Datos simulados
  const cliente = {
    tipoDocumento: "C.C",
    numeroDocumento: "123456789",
    nombres: "Juan",
    apellidos: "Pérez López",
    fechaNacimiento: "1990-08-12",
    edad: "34",
    sexo: "M",
    estadoCivil: "Soltero",
    ocupacion: "Comerciante",
    nivelEducativo: "Bachiller",
    lugarNacimiento: "Popayán",
    tipoSangre: "O+",

    direccion: "Cra 5 #12-45",
    barrio: "San José",
    municipio: "Popayán",
    departamento: "Cauca",
    telFijo: "8234567",
    telCelular: "3105558899",
    correo: "juanperez@gmail.com",
    medioContacto: "WhatsApp",

    fechaAfiliacion: "2024-05-20",
  };

  const camposPersonales = [
    ["Tipo de Documento", cliente.tipoDocumento],
    ["Número de Documento", cliente.numeroDocumento],
    ["Nombres", cliente.nombres],
    ["Apellidos", cliente.apellidos],
    ["Fecha de Nacimiento", cliente.fechaNacimiento, "date"],
    ["Edad", cliente.edad],
    ["Sexo", cliente.sexo],
    ["Estado Civil", cliente.estadoCivil],
    ["Ocupación", cliente.ocupacion],
    ["Nivel Educativo", cliente.nivelEducativo],
    ["Lugar de Nacimiento", cliente.lugarNacimiento],
    ["Tipo de Sangre", cliente.tipoSangre],
  ];

  const camposContacto = [
    ["Dirección", cliente.direccion],
    ["Barrio", cliente.barrio],
    ["Municipio", cliente.municipio],
    ["Departamento", cliente.departamento],
    ["Teléfono Fijo", cliente.telFijo],
    ["Teléfono Celular", cliente.telCelular],
    ["Correo", cliente.correo],
    ["Medio de Contacto", cliente.medioContacto],
  ];

  return (
    <Box sx={{ p: 4, color: "#fff" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
        Información del Titular
      </Typography>

      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        textColor="primary"
        indicatorColor="primary"
        sx={{
          mb: 3,
          "& .MuiTab-root": { color: "#9ca3af", textTransform: "none" },
          "& .Mui-selected": { color: "#fff" },
        }}
      >
        <Tab label="Datos Personales" />
        <Tab label="Información de Contacto" />
        <Tab label="Afiliación" />
      </Tabs>

      <Paper sx={{ p: 3, bgcolor: "#0c1622" }}>
        {/* TAB 1 - Datos Personales */}
        {tab === 0 && (
          <>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Datos Personales
            </Typography>

            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              {camposPersonales.map(([label, value, type], idx) => (
                <TextField
                  key={idx}
                  label={label}
                  value={value}
                  type={type || "text"}
                  InputLabelProps={type === "date" ? { shrink: true } : {}}
                  InputProps={{ readOnly: true }}
                  sx={inputWhite}
                />
              ))}
            </Box>

            <Box sx={{ textAlign: "right", mt: 3 }}>
              <Button variant="contained" onClick={() => setTab(1)}>
                Siguiente
              </Button>
            </Box>
          </>
        )}

        {/* TAB 2 - Contacto */}
        {tab === 1 && (
          <>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Información de Contacto
            </Typography>

            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              {camposContacto.map(([label, value], idx) => (
                <TextField
                  key={idx}
                  label={label}
                  value={value}
                  InputProps={{ readOnly: true }}
                  sx={inputWhite}
                />
              ))}
            </Box>

            <Box sx={{ textAlign: "right", mt: 3 }}>
              <Button
                variant="outlined"
                sx={{ color: "#fff", borderColor: "#fff", mr: 2 }}
                onClick={() => setTab(0)}
              >
                Regresar
              </Button>

              <Button variant="contained" onClick={() => setTab(2)}>
                Siguiente
              </Button>
            </Box>
          </>
        )}

        {/* TAB 3 - Afiliación */}
        {tab === 2 && (
          <>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Detalles de Afiliación
            </Typography>

            <TextField
              label="Fecha de Afiliación"
              type="date"
              value={cliente.fechaAfiliacion}
              InputLabelProps={{ shrink: true }}
              InputProps={{ readOnly: true }}
              sx={{ ...inputWhite, width: "30%" }}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
              <Button
                variant="contained"
                onClick={() => navigate("/dashboard/clientes")}
              >
                Volver a la Lista
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
}

/* ESTILO TEXTFIELDS EN BLANCO */
const inputWhite = {
  label: { color: "#9ca3af" },
  input: { color: "#fff" },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#555" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#888" },
};
