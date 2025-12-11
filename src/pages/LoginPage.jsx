import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setEmailError("Ingresa un correo válido");
    } else {
      setEmailError("");
    }
  };

  const handleLogin = () => {
    // Más adelante pones la validación del backend
    navigate("/dashboard"); // 🔵 REDIRECCIÓN AL DASHBOARD
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/login-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 420,
          p: 4,
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="600"
          textAlign="center"
          sx={{ color: "#fff", mb: 2 }}
        >
          Bienvenido de Nuevo
        </Typography>

        <Typography
          textAlign="center"
          sx={{ color: "#e6e6e6", fontSize: "15px", mb: 3 }}
        >
          Ingresa tus credenciales para acceder a tu cuenta.
        </Typography>

        <TextField
          fullWidth
          label="Correo Electrónico"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          error={Boolean(emailError)}
          helperText={emailError}
          sx={{
            mb: 2,
            "& .MuiInputBase-input": { color: "#fff" },
            "& .MuiInputLabel-root": { color: "#ddd" },
            "& .MuiFormHelperText-root": { color: "#ffb3b3" },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: emailError
                ? "rgba(255,0,0,0.7)"
                : "rgba(255,255,255,0.5)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: emailError ? "red" : "#fff",
            },
          }}
        />

        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          variant="outlined"
          sx={{
            mb: 3,
            "& .MuiInputBase-input": { color: "#fff" },
            "& .MuiInputLabel-root": { color: "#ddd" },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255,255,255,0.5)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          disabled={emailError || email === ""}
          onClick={handleLogin}  // 🔵 CAMBIO IMPORTANTE
          sx={{
            py: 1.2,
            fontWeight: "600",
            bgcolor: emailError || email === "" ? "gray" : "#1E88E5",
            ":hover": {
              bgcolor:
                emailError || email === "" ? "gray" : "#1565c0",
            },
          }}
        >
          Iniciar Sesión
        </Button>

        <Typography
          textAlign="center"
          mt={2}
          sx={{ color: "#e6e6e6", fontSize: "13px" }}
        >
          ¿Olvidó su Contraseña?
        </Typography>
      </Paper>
    </Box>
  );
}
