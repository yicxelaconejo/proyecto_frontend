import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { Event } from "@mui/icons-material";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function RegistrarPagoPage() {
  const { documento } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const nombreCliente = location.state?.nombreCliente || documento;

  const [cliente, setCliente] = useState(nombreCliente);
  const [fechaPago, setFechaPago] = useState("");
  const [valor, setValor] = useState("");
  const [metodo, setMetodo] = useState("");
  const [numeroRecibo, setNumeroRecibo] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const [errores, setErrores] = useState({});
  const [openAlert, setOpenAlert] = useState(false);

  const metodosPago = ["Efectivo", "Transferencia", "Tarjeta", "Otro"];

  const validarCampos = () => {
    const nuevosErrores = {};
    if (!cliente) nuevosErrores.cliente = "El cliente es obligatorio";
    if (!fechaPago) nuevosErrores.fechaPago = "La fecha es obligatoria";
    if (!valor) nuevosErrores.valor = "El valor es obligatorio";
    if (!metodo) nuevosErrores.metodo = "El método de pago es obligatorio";
    if (!numeroRecibo) nuevosErrores.numeroRecibo = "El número de recibo es obligatorio";
    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const guardarPago = () => {
    if (!validarCampos()) return;

    // Aquí puedes integrar backend si lo deseas
    setOpenAlert(true);
  };

  const cerrarAlerta = () => {
    setOpenAlert(false);
    navigate("/dashboard/clientes/whatsapp");
  };

  return (
    <Box sx={{ p: 3, display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "100%", maxWidth: 600, borderRadius: 2, background: "#1e293b" }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: "#fff" }}>
            Registrar Pago
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 2 }}>
            <TextField
              label="Cliente"
              variant="outlined"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              error={!!errores.cliente}
              helperText={errores.cliente}
              sx={{
                "& .MuiInputBase-root": { color: "#fff", background: "#111a27" },
                "& fieldset": { borderColor: "#2b3b4f" },
              }}
            />
            <TextField
              label="Fecha de Pago"
              variant="outlined"
              type="date"
              value={fechaPago}
              onChange={(e) => setFechaPago(e.target.value)}
              error={!!errores.fechaPago}
              helperText={errores.fechaPago}
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiInputBase-root": { color: "#fff", background: "#111a27" },
                "& fieldset": { borderColor: "#2b3b4f" },
              }}
            />
            <TextField
              label="Valor Pagado"
              variant="outlined"
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              error={!!errores.valor}
              helperText={errores.valor}
              sx={{
                "& .MuiInputBase-root": { color: "#fff", background: "#111a27" },
                "& fieldset": { borderColor: "#2b3b4f" },
              }}
            />
            <TextField
              label="Método de Pago"
              variant="outlined"
              select
              value={metodo}
              onChange={(e) => setMetodo(e.target.value)}
              error={!!errores.metodo}
              helperText={errores.metodo}
              sx={{
                "& .MuiInputBase-root": { color: "#fff", background: "#111a27" },
                "& fieldset": { borderColor: "#2b3b4f" },
              }}
            >
              {metodosPago.map((m) => (
                <MenuItem key={m} value={m}>
                  {m}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Número de Recibo"
              variant="outlined"
              value={numeroRecibo}
              onChange={(e) => setNumeroRecibo(e.target.value)}
              error={!!errores.numeroRecibo}
              helperText={errores.numeroRecibo}
              sx={{
                gridColumn: "span 2",
                "& .MuiInputBase-root": { color: "#fff", background: "#111a27" },
                "& fieldset": { borderColor: "#2b3b4f" },
              }}
            />
            <TextField
              label="Observaciones"
              variant="outlined"
              multiline
              rows={4}
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
              sx={{
                gridColumn: "span 2",
                "& .MuiInputBase-root": { color: "#fff", background: "#111a27" },
                "& fieldset": { borderColor: "#2b3b4f" },
              }}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              sx={{ textTransform: "none", background: "#374151", "&:hover": { background: "#4b5563" } }}
              onClick={() => navigate("/dashboard/clientes/whatsapp")}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              sx={{ textTransform: "none", background: "#0a84ff", "&:hover": { background: "#0066d8" } }}
              onClick={guardarPago}
            >
              Guardar Pago
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Dialog open={openAlert} onClose={cerrarAlerta}>
        <DialogContent sx={{ textAlign: "center", bgcolor: "#111a27", color: "#fff", borderRadius: 2 }}>
          <IconButton sx={{ bgcolor: "#0a84ff", color: "#fff", mb: 2 }}>
            <Event />
          </IconButton>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            ¡Registro Exitoso!
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Pago Registrado
          </Typography>
          <Button
            variant="contained"
            onClick={cerrarAlerta}
            sx={{ background: "#0a84ff", "&:hover": { background: "#0066d8" } }}
          >
            Aceptar
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
