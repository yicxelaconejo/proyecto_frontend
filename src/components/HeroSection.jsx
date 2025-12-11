import { Box, Typography, Button } from '@mui/material';
export default function HeroSection(){
  return (
    <Box sx={{ height: 360, borderRadius: 2, backgroundImage: 'url(/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <Box sx={{ bgcolor: 'rgba(0,0,0,0.5)', p: 4, borderRadius: 2, textAlign:'center' }}>
        <Typography variant="h4" fontWeight={800} color="#fff">Honrando la memoria, celebrando la vida</Typography>
        <Typography color="#ddd" sx={{ mt:1 }}>Ofrecemos servicios funerarios con dignidad y respeto.</Typography>
        <Button variant="contained" sx={{ mt:2 }}>Explorar nuestros servicios</Button>
      </Box>
    </Box>
  );
}
