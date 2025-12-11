import { Container, TextField, Button, Typography, Box } from "@mui/material";

export default function ContactForm() {
  return (
    <Container sx={{ mt: 8, mb:10 }}>
      <Typography variant="h5" fontWeight="bold">Contacto</Typography>
      <Typography mb={2}>Para cualquier consulta o solicitud, escríbenos 🕊</Typography>

      <Box sx={{ maxWidth:500 }}>
        <TextField label="Tu nombre" fullWidth sx={{ mb:2 }} />
        <TextField label="Correo electrónico" fullWidth sx={{ mb:2 }} />
        <TextField label="Mensaje" multiline rows={4} fullWidth sx={{ mb:2 }} />
        <Button variant="contained">Enviar</Button>
      </Box>
    </Container>
  );
}
