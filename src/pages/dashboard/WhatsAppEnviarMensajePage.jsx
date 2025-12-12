import { Box, TextField, Button, Typography, Card, CardContent, Modal } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function WhatsAppEnviarMensajePage() {
  const { documento } = useParams();

  const [cliente, setCliente] = useState(documento || "");
  const [mensaje, setMensaje] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [borradorIA, setBorradorIA] = useState("");

  // Función para generar borrador IA "realista" (solo frontend)
  const generarBorradorIA = () => {
    if (!mensaje) {
      setBorradorIA(
        "💬 ¡Hola! Te escribimos desde nuestra empresa para mantenerte informado. Este es un mensaje generado automáticamente."
      );
    } else {
      const saludos = ["¡Hola!", "Buenas tardes!", "¡Saludos!", "Estimado cliente,"];
      const cierres = ["😊", "¡Que tengas un excelente día!", "Estamos a tu disposición.", "¡Gracias por tu tiempo!"];
      const saludo = saludos[Math.floor(Math.random() * saludos.length)];
      const cierre = cierres[Math.floor(Math.random() * cierres.length)];

      let mensajeLimpio = mensaje.trim();
      if (!/[.!?]$/.test(mensajeLimpio)) mensajeLimpio += ".";
      mensajeLimpio = mensajeLimpio.charAt(0).toUpperCase() + mensajeLimpio.slice(1);

      const borrador = `${saludo} ${mensajeLimpio} ${cierre}`;
      setBorradorIA(borrador);
    }
    setModalOpen(true);
  };

  // Función para abrir WhatsApp con mensaje y número
  const enviarWhatsApp = () => {
    if (!cliente) {
      alert("Por favor ingresa un número de teléfono válido.");
      return;
    }
    const numeroLimpio = cliente.replace(/\D/g, ""); // eliminar caracteres que no sean números
    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `https://wa.me/${numeroLimpio}?text=${mensajeCodificado}`;
    window.open(url, "_blank");
  };

  return (
    <Box sx={{ p: 3, display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "100%", maxWidth: 600, background: "#1e293b", borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: "#fff" }}>
            Enviar Mensaje por WhatsApp
          </Typography>

          {/* Campo de cliente */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Número de teléfono del cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiInputBase-root": { color: "#fff", background: "#111a27", borderRadius: "12px" },
              "& fieldset": { borderColor: "#2b3b4f" },
              "& input": { color: "#fff" },
            }}
          />

          {/* Caja de texto */}
          <TextField
            fullWidth
            multiline
            rows={6}
            placeholder="Escribe el mensaje…"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            sx={{
              mb: 3,
              "& .MuiInputBase-root": { color: "#fff", background: "#111a27", borderRadius: "12px" },
              "& fieldset": { borderColor: "#2b3b4f" },
            }}
          />

          {/* Botones */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              sx={{ textTransform: "none", background: "#374151", "&:hover": { background: "#4b5563" } }}
              onClick={generarBorradorIA}
            >
              Generar Borrador con IA
            </Button>

            <Button
              variant="contained"
              sx={{ textTransform: "none", background: "#0a84ff", "&:hover": { background: "#0066d8" } }}
              onClick={enviarWhatsApp}
            >
              Enviar por WhatsApp
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Modal de borrador IA */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ bgcolor: "#1e293b", p: 3, borderRadius: 2, width: "90%", maxWidth: 500 }}>
          <Typography variant="h6" sx={{ mb: 2, color: "#fff" }}>
            Borrador generado por IA
          </Typography>
          <Typography sx={{ mb: 3, color: "#e0e0e0" }}>{borradorIA}</Typography>
          <Button
            variant="contained"
            sx={{ textTransform: "none", background: "#0a84ff", "&:hover": { background: "#0066d8" } }}
            onClick={() => {
              setMensaje(borradorIA);
              setModalOpen(false);
            }}
          >
            Usar este borrador
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
