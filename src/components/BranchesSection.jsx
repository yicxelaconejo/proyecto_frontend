import { Grid, Card, CardMedia, CardContent, Typography, Container } from "@mui/material";

const branches = [
  { img: "/sede1.png", title: "Funeraria Central" },
  { img: "/sede2.png", title: "Funeraria Norte" },
  { img: "/sede3.png", title: "Funeraria Este" },
];

export default function BranchesSection() {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>Funerarias sede</Typography>

      <Grid container spacing={3}>
        {branches.map((b, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card sx={{ bgcolor:"#101821", color:"#fff" }}>
              <CardMedia component="img" height="180" image={b.img}/>
              <CardContent>
                <Typography fontWeight="bold">{b.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
