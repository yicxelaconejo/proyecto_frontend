import { Grid, Card, CardMedia, CardContent, Typography, Button, Container } from "@mui/material";

const services = [
  {
    img: "/serv1.png",
    title: "Gestión Integral de Clientes",
    desc: "Acompañamiento humano y asesoría personalizada en cada proceso."
  },
  {
    img: "/serv2.png",
    title: "Procedimientos Administrativos",
    desc: "Aseguramos que todos los trámites estén en orden con agilidad y respeto."
  },

];

export default function ServicesSection() {
  return (
    <section id="servicios"> {/* ← Necesario para el scroll */}
      <Container sx={{ mt: 10, mb: 10 }}>
        
        <Typography 
          variant="h5" 
          fontWeight="bold" 
          mb={4} 
          sx={{ color:"#fff", textAlign:"left" }}
        >
          Nuestros Servicios
        </Typography>

        <Grid container spacing={4}>
          {services.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card 
                sx={{ 
                  bgcolor:"#101821", 
                  color:"#fff",
                  borderRadius:"10px",
                  overflow:"hidden",
                  transition:"0.3s",
                  "&:hover":{ transform:"scale(1.03)", boxShadow:"0px 0px 15px rgba(255,255,255,0.15)" }
                }}
              >
                <CardMedia component="img" height="150" image={item.img} />
                
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                  <Typography sx={{ mt:1, opacity:.85 }}>{item.desc}</Typography>

                  <Button 
                    variant="contained" 
                    size="small" 
                    sx={{ mt:3, bgcolor:"#1E88E5", ":hover":{ bgcolor:"#1565C0" } }}
                  >
                    Ver más
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </section>
  );
}
