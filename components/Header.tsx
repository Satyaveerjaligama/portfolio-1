import { navigationOptions } from "@/utilities/constants";
import { capitalizeFirstLetter } from "@/utilities/helper";
import { Grid } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <Grid container className="px-5 py-6 justify-end header" columnSpacing={6}>
      { navigationOptions.map((option) => 
        <Grid item key={option}>
          <Link href={`/${option}`}>{capitalizeFirstLetter(option)}</Link>
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
