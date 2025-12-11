import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Paper,
  Dialog,
  DialogContent,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";

export default function RegistrarBeneficiarioPage() {
  const navigate = useNavigate();
  const { documento } = useParams();  // ← aquí realmente viene el documento del titular

  const [openModal, setOpenModal] = useState(false);

  const [form, setForm] = useState({
    titular: documento || "",
    parentesco: "",
    nombres: "",
    apellidos: "",
    tipoDocumento: "",
    numeroDocumento: "",
    fechaNacimiento: "",
    edad: "",
    telefono: "",
  });

  const [errors, setErrors] = useState({});

  const validar = () => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) newErrors[key] = "Requerido";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGuardar = () => {
    if (!validar()) return;
    setOpenModal(true);
  };

  const handleAceptar = () => {
    setOpenModal(false);

    // ⭐ REDIRECCIÓN A LA GESTIÓN DE BENEFICIARIOS DEL TITULAR
    navigate(`/dashboard/clientes/${documento}/beneficiarios`);
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <Box sx={{ p: 4, color: "#fff" }}>
      <Button
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2, color: "#fff" }}
        onClick={() => navigate(-1)}
      >
        Regresar
      </Button>

      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
        Registro de Beneficiario
      </Typography>

      <Paper sx={{ p: 3, bgcolor: "#0f172a" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
        >
          <TextField
            label="Titular"
            value={form.titular}
            error={!!errors.titular}
            helperText={errors.titular}
            sx={inputWhite}
            disabled
          />

          <TextField
            label="Parentesco"
            select
            value={form.parentesco}
            onChange={(e) => handleChange("parentesco", e.target.value)}
            error={!!errors.parentesco}
            helperText={errors.parentesco}
            sx={inputWhite}
          >
            <MenuItem value="Padre">Padre</MenuItem>
            <MenuItem value="Madre">Madre</MenuItem>
            <MenuItem value="Hijo">Hijo</MenuItem>
            <MenuItem value="Hermano">Hermano</MenuItem>
            <MenuItem value="Cónyuge">Cónyuge</MenuItem>
          </TextField>

          <TextField
            label="Nombres"
            value={form.nombres}
            onChange={(e) => handleChange("nombres", e.target.value)}
            error={!!errors.nombres}
            helperText={errors.nombres}
            sx={inputWhite}
          />

          <TextField
            label="Apellidos"
            value={form.apellidos}
            onChange={(e) => handleChange("apellidos", e.target.value)}
            error={!!errors.apellidos}
            helperText={errors.apellidos}
            sx={inputWhite}
          />

          <TextField
            label="Tipo de Documento"
            select
            value={form.tipoDocumento}
            onChange={(e) => handleChange("tipoDocumento", e.target.value)}
            error={!!errors.tipoDocumento}
            helperText={errors.tipoDocumento}
            sx={inputWhite}
          >
            <MenuItem value="CC">Cédula de Ciudadanía</MenuItem>
            <MenuItem value="TI">Tarjeta de Identidad</MenuItem>
            <MenuItem value="RC">Registro Civil</MenuItem>
            <MenuItem value="CE">Cédula de Extranjería</MenuItem>
          </TextField>

          <TextField
            label="Número de Documento"
            value={form.numeroDocumento}
            onChange={(e) => handleChange("numeroDocumento", e.target.value)}
            error={!!errors.numeroDocumento}
            helperText={errors.numeroDocumento}
            sx={inputWhite}
          />

          <TextField
            label="Fecha de Nacimiento"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={form.fechaNacimiento}
            onChange={(e) => handleChange("fechaNacimiento", e.target.value)}
            error={!!errors.fechaNacimiento}
            helperText={errors.fechaNacimiento}
            sx={inputWhite}
          />

          <TextField
            label="Edad"
            type="number"
            value={form.edad}
            onChange={(e) => handleChange("edad", e.target.value)}
            error={!!errors.edad}
            helperText={errors.edad}
            sx={inputWhite}
          />

          <TextField
            label="Teléfono de Contacto"
            value={form.telefono}
            onChange={(e) => handleChange("telefono", e.target.value)}
            error={!!errors.telefono}
            helperText={errors.telefono}
            sx={inputWhite}
          />
        </Box>

        <Box sx={{ textAlign: "right", mt: 3 }}>
          <Button
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#fff", mr: 2 }}
            onClick={() => navigate(-1)}
          >
            Cancelar
          </Button>

          <Button variant="contained" onClick={handleGuardar}>
            Guardar
          </Button>
        </Box>
      </Paper>

      {/* MODAL DE ÉXITO */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogContent
          sx={{
            bgcolor: "#0c1622",
            textAlign: "center",
            p: 4,
            borderRadius: "12px",
            color: "#fff",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
            width={60}
            style={{ marginBottom: 15 }}
          />
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
            ¡Registro Exitoso!
          </Typography>

          <Typography sx={{ color: "#9ca3af", mb: 3 }}>
            El beneficiario ha sido creado correctamente.
          </Typography>

          <Button variant="contained" fullWidth onClick={handleAceptar}>
            Aceptar
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

const inputWhite = {
  "& .MuiInputBase-input": { color: "#fff" },
  "& label": { color: "#94a3b8" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#334155" },
    "&:hover fieldset": { borderColor: "#475569" },
  },
  "& .MuiSelect-icon": { color: "#fff" },
};
