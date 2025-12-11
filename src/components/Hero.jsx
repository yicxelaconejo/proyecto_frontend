import { Box, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        p: 8
      }}
    >
      <Typography variant="h2" fontWeight={700}>
        Bienvenido a mi proyecto
      </Typography>

      <Typography variant="h5" sx={{ mt: 2, maxWidth: 500 }}>
        Este diseño fue creado replicando el prototipo original en Figma.
      </Typography>

      <Button variant="contained" sx={{ mt: 3, width: 200 }}>
        Comenzar
      </Button>
    </Box>
  );
}
