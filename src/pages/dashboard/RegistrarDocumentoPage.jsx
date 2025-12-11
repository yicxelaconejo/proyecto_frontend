import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  IconButton,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

export default function RegistrarDocumentoPage() {
  const navigate = useNavigate();
  const { documento } = useParams();

  const [tipoDocumento, setTipoDocumento] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [fecha, setFecha] = useState("");

  const [archivosSubidos, setArchivosSubidos] = useState([]);

  // 🟩 MODAL DE ÉXITO
  const [openSuccess, setOpenSuccess] = useState(false);

  // 🟦 MODAL DE VISOR DE DOCUMENTO
  const [openViewer, setOpenViewer] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);

  const handleGuardar = () => {
    if (!tipoDocumento || !archivo || !fecha) {
      alert("Por favor complete todos los campos.");
      return;
    }

    // Crear URL temporal
    const fileURL = URL.createObjectURL(archivo);

    const nuevoArchivo = {
      tipo: tipoDocumento,
      nombre: archivo.name,
      fecha,
      url: fileURL,
      id: Date.now(),
    };

    setArchivosSubidos([...archivosSubidos, nuevoArchivo]);

    setTipoDocumento("");
    setArchivo(null);
    setFecha("");

    setOpenSuccess(true); // abrir modal de éxito
  };

  const handleVerDocumento = (url) => {
    setFileUrl(url);
    setOpenViewer(true);
  };

  return (
    <Box sx={{ p: 3, color: "#fff" }}>

      {/* TITULO */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Registro de Documentos del Cliente
      </Typography>

      <Typography sx={{ opacity: 0.8, mb: 3 }}>
        Complete la siguiente información para cargar un nuevo documento.
      </Typography>

      {/* CARD PRINCIPAL */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          bgcolor: "#0c1622",
          borderRadius: 3,
          maxWidth: "1000px",
        }}
      >
        <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold", color: "#fff" }}>
          Información del Documento
        </Typography>

        <Divider sx={{ mb: 3, borderColor: "#233041" }} />

        {/* CAMPOS */}
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>

          {/* Tipo de Documento */}
          <TextField
            select
            label="Tipo de Documento"
            value={tipoDocumento}
            onChange={(e) => setTipoDocumento(e.target.value)}
            sx={{
              minWidth: 280,
              flex: 1,
              "& .MuiOutlinedInput-input": { color: "#fff" },
              "& .MuiInputLabel-root": { color: "#ccc" },
              "& .MuiSelect-icon": { color: "#fff" },
              "& fieldset": { borderColor: "#233041" },
            }}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  sx: {
                    bgcolor: "#0c1622",
                    color: "#fff",
                    "& .MuiMenuItem-root": { color: "#fff" },
                  },
                },
              },
            }}
          >
            <MenuItem value="" sx={{ color: "#fff" }}>
              Seleccione el tipo de documento
            </MenuItem>
            <MenuItem sx={{ color: "#fff" }} value="Cédula de Ciudadanía">
              Cédula de Ciudadanía
            </MenuItem>
            <MenuItem sx={{ color: "#fff" }} value="Contrato de Servicios">
              Contrato de Servicios
            </MenuItem>
            <MenuItem sx={{ color: "#fff" }} value="Pagaré">
              Pagaré
            </MenuItem>
            <MenuItem sx={{ color: "#fff" }} value="Certificado">
              Certificado
            </MenuItem>
          </TextField>

          {/* Selección de Archivo */}
          <Button
            variant="outlined"
            component="label"
            sx={{
              minWidth: 280,
              flex: 1,
              color: "#fff",
              borderColor: "#415a77",
              textTransform: "none",
              "&:hover": { borderColor: "#fff" },
            }}
          >
            {archivo ? archivo.name : "Seleccionar Archivo"}
            <input
              type="file"
              hidden
              onChange={(e) => setArchivo(e.target.files[0])}
            />
          </Button>

          {/* Fecha */}
          <TextField
            type="date"
            label="Fecha de Subida"
            InputLabelProps={{ shrink: true }}
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            sx={{
              minWidth: 220,
              flex: 1,
              input: { color: "#fff" },
              label: { color: "#ccc" },
              "& fieldset": { borderColor: "#233041" },
            }}
          />
        </Box>

        {/* BOTONES */}
        <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#415a77",
              textTransform: "none",
              "&:hover": { borderColor: "#fff" },
            }}
            onClick={() => navigate(-1)}
          >
            Cancelar
          </Button>

          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={handleGuardar}
          >
            Guardar
          </Button>
        </Box>
      </Paper>

      {/* ARCHIVOS SUBIDOS */}
      {archivosSubidos.length > 0 && (
        <Box sx={{ mt: 5, maxWidth: "1000px" }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Archivos Subidos
          </Typography>

          {archivosSubidos.map((file) => (
            <Paper
              key={file.id}
              sx={{
                p: 2,
                mb: 2,
                bgcolor: "#19232f",
                borderRadius: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>{file.tipo}</Typography>
                <Typography sx={{ opacity: 0.7 }}>{file.nombre}</Typography>
                <Typography sx={{ opacity: 0.6, fontSize: "0.8rem" }}>
                  Fecha: {file.fecha}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton sx={{ color: "#fff" }} onClick={() => handleVerDocumento(file.url)}>
                  <VisibilityIcon />
                </IconButton>

                <IconButton
                  sx={{ color: "#ff5252" }}
                  onClick={() =>
                    setArchivosSubidos(archivosSubidos.filter((f) => f.id !== file.id))
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Paper>
          ))}
        </Box>
      )}

      {/* 🟩 MODAL DE ÉXITO */}
      <Dialog open={openSuccess} onClose={() => setOpenSuccess(false)}>
        <DialogContent
          sx={{
            backgroundColor: "#0d1117",
            textAlign: "center",
            p: 5,
            borderRadius: "16px",
            width: "380px",
          }}
        >
          <div
            style={{
              width: 65,
              height: 65,
              backgroundColor: "rgba(34,197,94,0.2)",
              margin: "0 auto",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
              width={35}
              alt="success"
            />
          </div>

          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "white", mb: 1 }}
          >
            ¡Registro Exitoso!
          </Typography>

          <Typography sx={{ color: "#cbd5e1", mb: 3 }}>
            Documento Registrado
          </Typography>

          <Button
            variant="contained"
            fullWidth
            onClick={() => setOpenSuccess(false)}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              backgroundColor: "#2563eb",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#1d4ed8" },
            }}
          >
            Aceptar
          </Button>
        </DialogContent>
      </Dialog>

      {/* 🟦 MODAL PARA VER DOCUMENTO */}
      <Dialog open={openViewer} onClose={() => setOpenViewer(false)} maxWidth="md" fullWidth>
        <DialogTitle
          sx={{
            backgroundColor: "#0f172a",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Visualizador de Documento

          <div style={{ display: "flex", gap: "15px" }}>
            <a
              href={fileUrl}
              download
              style={{ color: "white", fontSize: "18px" }}
              title="Descargar"
            >
              ⬇
            </a>
            <span
              style={{ cursor: "pointer", fontSize: "20px" }}
              onClick={() => setOpenViewer(false)}
            >
              ✖
            </span>
          </div>
        </DialogTitle>

        <DialogContent sx={{ backgroundColor: "#0d1117", p: 3 }}>
          {fileUrl ? (
            <iframe
              src={fileUrl}
              title="Documento"
              style={{
                width: "100%",
                height: "450px",
                borderRadius: "10px",
                border: "none",
              }}
            />
          ) : (
            <Typography sx={{ color: "#cbd5e1", textAlign: "center" }}>
              Vista previa del documento se mostrará aquí.
            </Typography>
          )}
        </DialogContent>

        <DialogActions sx={{ backgroundColor: "#0f172a", padding: "10px" }}>
          <Button
            variant="contained"
            onClick={() => setOpenViewer(false)}
            sx={{ backgroundColor: "#334155" }}
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
