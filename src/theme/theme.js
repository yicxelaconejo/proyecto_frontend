import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#4F46E5" }, // ajustable según Figma
    secondary: { main: "#22D3EE" },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  }
});
