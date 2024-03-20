"use client"
import { Typography, Grid } from "@mui/material";
import { inter, roboto_mono } from "./fonts";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";
import { routes } from "@/utilities/constants";
import { capitalizeFirstLetter } from "@/utilities/helper";

export default function Home() {
  const router = useRouter();
  const navigationOptions: string [] = ["skills", "projects", "experience", "hobbies", "contact"];

  return (
    <Grid container className="grid place-items-center h-screen">
      <Grid item className="text-center">
        <Typography className={`${inter.className} text-5xl mb-3`}>Satyaveer Jaligama</Typography>
        <Typography className={roboto_mono.className}>Frontend Developer</Typography>
        <Grid container columnSpacing={2} className="mt-3 justify-center">
          {navigationOptions.map((listItem)=>
            <Grid item key={listItem}>
              <CustomButton title={capitalizeFirstLetter(listItem)} variant="outlined" className="home-page-btns normal-case rounded-3xl" onClick={()=>{
                router.push(`/${routes[listItem]}`);
              }}/>
          </Grid>  
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
