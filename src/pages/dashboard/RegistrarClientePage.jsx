import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Paper,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RegistrarClientePage() {
  const [tab, setTab] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    tipoDocumento: "",
    numeroDocumento: "",
    nombres: "",
    apellidos: "",
    fechaNacimiento: "",
    edad: "",
    sexo: "",
    estadoCivil: "",
    ocupacion: "",
    nivelEducativo: "",
    lugarNacimiento: "",
    tipoSangre: "",
    direccion: "",
    barrio: "",
    municipio: "",
    departamento: "",
    telFijo: "",
    telCelular: "",
    correo: "",
    medioContacto: "",
    fechaAfiliacion: "",
  });

  const [errors, setErrors] = useState({});

  const validarTab = (tabIndex) => {
    const newErrors = {};
    if (tabIndex === 0) {
      if (!form.tipoDocumento) newErrors.tipoDocumento = "Requerido";
      if (!form.numeroDocumento) newErrors.numeroDocumento = "Requerido";
      if (!form.nombres) newErrors.nombres = "Requerido";
      if (!form.apellidos) newErrors.apellidos = "Requerido";
      if (!form.fechaNacimiento) newErrors.fechaNacimiento = "Requerido";
      if (!form.edad) newErrors.edad = "Requerido";
      if (!form.sexo) newErrors.sexo = "Requerido";
      if (!form.estadoCivil) newErrors.estadoCivil = "Requerido";
      if (!form.ocupacion) newErrors.ocupacion = "Requerido";
      if (!form.nivelEducativo) newErrors.nivelEducativo = "Requerido";
      if (!form.lugarNacimiento) newErrors.lugarNacimiento = "Requerido";
      if (!form.tipoSangre) newErrors.tipoSangre = "Requerido";
    }

    if (tabIndex === 1) {
      if (!form.direccion) newErrors.direccion = "Requerido";
      if (!form.barrio) newErrors.barrio = "Requerido";
      if (!form.municipio) newErrors.municipio = "Requerido";
      if (!form.departamento) newErrors.departamento = "Requerido";
      if (!form.telFijo) newErrors.telFijo = "Requerido";
      if (!form.telCelular) newErrors.telCelular = "Requerido";
      if (!form.correo) newErrors.correo = "Requerido";
      if (!form.medioContacto) newErrors.medioContacto = "Requerido";
    }

    if (tabIndex === 2) {
      if (!form.fechaAfiliacion) newErrors.fechaAfiliacion = "Requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegistrar = () => {
    if (!validarTab(2)) return;
    setOpenModal(true);
  };

  const handleAceptar = () => {
    setOpenModal(false);
    navigate("/dashboard/clientes");
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <Box sx={{ p: 4, color: "#fff" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, color: "#fff" }}>
        Registro de Titulares
      </Typography>

      {/* ------------------------- */}
      {/* TABS                      */}
      {/* ------------------------- */}
      <Tabs
        value={tab}
        onChange={(e, v) => {
          if (validarTab(tab)) setTab(v);
        }}
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
        <Tab label="Detalles de Afiliación" />
      </Tabs>

      <Paper sx={{ p: 3, bgcolor: "#0c1622" }}>
        {/* TAB 1 */}
        {tab === 0 && (
          <>
            <Typography variant="h6" sx={{ mb: 2, color: "#fff" }}>
              Datos Personales
            </Typography>
            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              <TextField
                label="Tipo de Documento"
                select
                value={form.tipoDocumento}
                onChange={(e) => handleChange("tipoDocumento", e.target.value)}
                error={!!errors.tipoDocumento}
                helperText={errors.tipoDocumento}
                sx={inputWhite}
              >
                <MenuItem value="CC">C.C</MenuItem>
                <MenuItem value="TI">T.I</MenuItem>
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
                label="Fecha de Nacimiento"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={form.fechaNacimiento}
                onChange={(e) =>
                  handleChange("fechaNacimiento", e.target.value)
                }
                error={!!errors.fechaNacimiento}
                helperText={errors.fechaNacimiento}
                sx={inputWhite}
              />

              <TextField
                label="Edad"
                value={form.edad}
                onChange={(e) => handleChange("edad", e.target.value)}
                error={!!errors.edad}
                helperText={errors.edad}
                sx={inputWhite}
              />

              <TextField
                label="Sexo"
                select
                value={form.sexo}
                onChange={(e) => handleChange("sexo", e.target.value)}
                error={!!errors.sexo}
                helperText={errors.sexo}
                sx={inputWhite}
              >
                <MenuItem value="M">Masculino</MenuItem>
                <MenuItem value="F">Femenino</MenuItem>
                <MenuItem value="O">Otro</MenuItem>
              </TextField>

              <TextField
                label="Estado Civil"
                select
                value={form.estadoCivil}
                onChange={(e) => handleChange("estadoCivil", e.target.value)}
                error={!!errors.estadoCivil}
                helperText={errors.estadoCivil}
                sx={inputWhite}
              >
                <MenuItem value="Soltero">Soltero(a)</MenuItem>
                <MenuItem value="Casado">Casado(a)</MenuItem>
                <MenuItem value="Unión Libre">Unión Libre</MenuItem>
                <MenuItem value="Divorciado">Divorciado(a)</MenuItem>
              </TextField>

              <TextField
                label="Ocupación"
                value={form.ocupacion}
                onChange={(e) => handleChange("ocupacion", e.target.value)}
                error={!!errors.ocupacion}
                helperText={errors.ocupacion}
                sx={inputWhite}
              />

              <TextField
                label="Nivel Educativo"
                value={form.nivelEducativo}
                onChange={(e) =>
                  handleChange("nivelEducativo", e.target.value)
                }
                error={!!errors.nivelEducativo}
                helperText={errors.nivelEducativo}
                sx={inputWhite}
              />

              <TextField
                label="Lugar de Nacimiento"
                value={form.lugarNacimiento}
                onChange={(e) =>
                  handleChange("lugarNacimiento", e.target.value)
                }
                error={!!errors.lugarNacimiento}
                helperText={errors.lugarNacimiento}
                sx={inputWhite}
              />

              <TextField
                label="Tipo de Sangre"
                select
                value={form.tipoSangre}
                onChange={(e) => handleChange("tipoSangre", e.target.value)}
                error={!!errors.tipoSangre}
                helperText={errors.tipoSangre}
                sx={inputWhite}
              >
                <MenuItem value="O+">O+</MenuItem>
                <MenuItem value="O-">O-</MenuItem>
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="A-">A-</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="B-">B-</MenuItem>
                <MenuItem value="AB+">AB+</MenuItem>
                <MenuItem value="AB-">AB-</MenuItem>
              </TextField>
            </Box>

            <Box sx={{ textAlign: "right", mt: 3 }}>
              <Button
                variant="contained"
                onClick={() => {
                  if (validarTab(0)) setTab(1);
                }}
              >
                Siguiente
              </Button>
            </Box>
          </>
        )}

        {/* TAB 2 */}
        {tab === 1 && (
          <>
            <Typography variant="h6" sx={{ mb: 2, color: "#fff" }}>
              Información de Contacto
            </Typography>
            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              <TextField
                label="Dirección"
                value={form.direccion}
                onChange={(e) => handleChange("direccion", e.target.value)}
                error={!!errors.direccion}
                helperText={errors.direccion}
                sx={inputWhite}
              />
              <TextField
                label="Barrio"
                value={form.barrio}
                onChange={(e) => handleChange("barrio", e.target.value)}
                error={!!errors.barrio}
                helperText={errors.barrio}
                sx={inputWhite}
              />
              <TextField
                label="Municipio"
                value={form.municipio}
                onChange={(e) => handleChange("municipio", e.target.value)}
                error={!!errors.municipio}
                helperText={errors.municipio}
                sx={inputWhite}
              />
              <TextField
                label="Departamento"
                value={form.departamento}
                onChange={(e) => handleChange("departamento", e.target.value)}
                error={!!errors.departamento}
                helperText={errors.departamento}
                sx={inputWhite}
              />
              <TextField
                label="Teléfono Fijo"
                value={form.telFijo}
                onChange={(e) => handleChange("telFijo", e.target.value)}
                error={!!errors.telFijo}
                helperText={errors.telFijo}
                sx={inputWhite}
              />
              <TextField
                label="Teléfono Celular"
                value={form.telCelular}
                onChange={(e) => handleChange("telCelular", e.target.value)}
                error={!!errors.telCelular}
                helperText={errors.telCelular}
                sx={inputWhite}
              />
              <TextField
                label="Correo Electrónico"
                value={form.correo}
                onChange={(e) => handleChange("correo", e.target.value)}
                error={!!errors.correo}
                helperText={errors.correo}
                sx={inputWhite}
              />
              <TextField
                label="Medio de Contacto Preferido"
                select
                value={form.medioContacto}
                onChange={(e) => handleChange("medioContacto", e.target.value)}
                error={!!errors.medioContacto}
                helperText={errors.medioContacto}
                sx={inputWhite}
              >
                <MenuItem value="WhatsApp">WhatsApp</MenuItem>
                <MenuItem value="Llamada">Llamada</MenuItem>
                <MenuItem value="SMS">SMS</MenuItem>
              </TextField>
            </Box>

            <Box sx={{ textAlign: "right", mt: 3 }}>
              <Button
                variant="outlined"
                sx={{ color: "#fff", borderColor: "#fff", mr: 2 }}
                onClick={() => setTab(0)}
              >
                Regresar
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  if (validarTab(1)) setTab(2);
                }}
              >
                Siguiente
              </Button>
            </Box>
          </>
        )}

        {/* TAB 3 */}
        {tab === 2 && (
          <>
            <Typography variant="h6" sx={{ mb: 2, color: "#fff" }}>
              Detalles de Afiliación
            </Typography>
            <TextField
              label="Fecha de Afiliación"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={form.fechaAfiliacion}
              onChange={(e) => handleChange("fechaAfiliacion", e.target.value)}
              error={!!errors.fechaAfiliacion}
              helperText={errors.fechaAfiliacion}
              sx={{ ...inputWhite, width: "30%" }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
              <Button variant="contained" onClick={handleRegistrar}>
                Registrar
              </Button>
            </Box>
          </>
        )}
      </Paper>

      {/* MODAL */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogContent
          sx={{
            bgcolor: "#0c1622",
            textAlign: "center",
            p: 4,
            borderRadius: "12px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
            alt="success"
            width={60}
            style={{ marginBottom: 15 }}
          />
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: "#fff" }}>
            ¡Registro Exitoso!
          </Typography>
          <Typography sx={{ color: "#9ca3af", mb: 3 }}>
            El Titular ha sido creado
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
  "& .MuiInputLabel-root": { color: "#9ca3af" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#fff !important" },
  "& .MuiInputBase-input": { color: "#fff !important" },
  "& .MuiSelect-select": { color: "#fff !important" },
  "& .MuiSelect-icon": { color: "#fff !important" },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#9ca3af" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
  "& .MuiFormHelperText-root": { color: "#ff6b6b" },
};
