import { Typography, Grid } from "@mui/material";
import { inter, roboto_mono } from "./fonts";
import CustomButton from "@/components/CustomButton";

export default function Home() {
  return (
    <Grid container className="grid place-items-center h-screen">
      <Grid item className="text-center">
        <Typography className={`${inter.className} text-5xl mb-3`}>Satyaveer Jaligama</Typography>
        <Typography className={roboto_mono.className}>Frontend Developer</Typography>
        <Grid container className="mt-3">
          <Grid>
              <CustomButton title="Skills" variant="outlined"/>
              <CustomButton title="Experience" variant="outlined"/>
              <CustomButton title="Hobbies" variant="outlined"/>
              <CustomButton title="Contact" variant="outlined"/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
