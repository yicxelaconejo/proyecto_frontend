import { Grid } from "@mui/material";
import FeatureCard from "./FeatureCard";

export default function CardsGrid() {
  return (
    <Grid container spacing={3} px={8} py={5}>
      <Grid item xs={12} sm={6} md={4}>
        <FeatureCard title="Servicio 1" text="Descripción del servicio" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <FeatureCard title="Servicio 2" text="Descripción del servicio" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <FeatureCard title="Servicio 3" text="Descripción del servicio" />
      </Grid>
    </Grid>
  );
}
