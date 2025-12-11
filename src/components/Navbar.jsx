// src/components/Navbar.jsx
import React from 'react';
import {
  AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

const MENU_ITEMS = [
  { label: 'Sobre Nosotros', id: 'hero' },
  { label: 'Servicios Activos', id: 'serviciosActivos' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Contacto', id: 'contacto' },
];

export default function Navbar() {

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    navigate('/');                        // Garantiza retornar a Home
    setTimeout(() => {                     // Da tiempo a cargar antes de desplazar
      if (el) el.scrollIntoView({ behavior:'smooth', block:'start' });
    }, 150);
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background:'#0A1521',
          paddingY:1,
          borderBottom:'1px solid rgba(255,255,255,0.06)',
          boxShadow:'none',
          zIndex:1300
        }}
      >
        <Toolbar sx={{ maxWidth:"1200px", margin:"0 auto", width:"100%", display:"flex", justifyContent:"space-between" }}>

          {/* 🔹 LOGO + CLICK PARA VOLVER A INICIO */}
          <Typography 
            variant="h6"
            onClick={() => navigate("/")}
            sx={{ 
              display:'flex', 
              gap:1, 
              alignItems:'center', 
              fontWeight:700, 
              cursor:"pointer", 
              "&:hover":{ opacity:0.7 }
            }}
          >
            <Box sx={{ width:34, height:34, borderRadius:1, bgcolor:"#1E293B",
              display:"flex", alignItems:"center", justifyContent:"center" }}>
              🕊
            </Box>
            Descanso Eterno
          </Typography>

          {/* 🔹 MENU DESKTOP */}
          <Box sx={{ display:{ xs:"none", md:"flex" }, gap:4 }}>
            {MENU_ITEMS.map(item => (
              <Button key={item.id} color="inherit" onClick={()=>handleScrollTo(item.id)} sx={{ textTransform:"none" }}>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* 🔹 BOTÓN LOGIN DESKTOP */}
          <Box sx={{ display:{ xs:"none", md:"block" } }}>
            <Button 
              variant="contained"
              sx={{ background:"#1E88E5", textTransform:"none", fontWeight:700 }}
              onClick={() => navigate("/login")}
            >
              Iniciar Sesión
            </Button>
          </Box>

          {/* 🔹 MENÚ MÓVIL */}
          <IconButton sx={{ display:{ md:"none" } }} onClick={()=>setOpen(true)} color="inherit">
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 🔹 DRAWER MOBILE */}
      <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
        <Box sx={{ width:260, p:2 }}>
          <Typography variant="h6" sx={{ mb:2 }}>Menú</Typography>

          <List>
            {MENU_ITEMS.map(item => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={()=>handleScrollTo(item.id)}>
                  <ListItemText primary={item.label}/>
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem disablePadding>
              <ListItemButton onClick={()=> navigate("/login")}>
                <ListItemText primary="Iniciar Sesión"/>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
