"use client"
import { Typography, Grid } from "@mui/material";
import { inter, roboto_mono } from "./fonts";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Grid container className="grid place-items-center h-screen">
      <Grid item className="text-center">
        <Typography className={`${inter.className} text-5xl mb-3`}>Satyaveer Jaligama</Typography>
        <Typography className={roboto_mono.className}>Frontend Developer</Typography>
        <Grid container columnSpacing={2} className="mt-3 justify-center">
          <Grid item>
              <CustomButton title="Skills" variant="outlined" className="home-page-btns normal-case rounded-3xl" onClick={()=>{
                router.push("/skills");
              }}/>
          </Grid>
          <Grid item>
              <CustomButton title="Projects" variant="outlined" className="home-page-btns normal-case rounded-3xl"/>
          </Grid>
          <Grid item>
            <CustomButton title="Experience" variant="outlined" className="home-page-btns normal-case rounded-3xl"/>
          </Grid>
          <Grid item>
            <CustomButton title="Hobbies" variant="outlined" className="home-page-btns normal-case rounded-3xl"/>
          </Grid>
          <Grid item>
            <CustomButton title="Contact" variant="outlined" className="home-page-btns normal-case rounded-3xl"/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
