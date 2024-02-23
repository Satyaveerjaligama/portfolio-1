import { Grid } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <Grid container className="px-5 py-6 justify-end header" columnSpacing={6}>
      <Grid item>
        <Link href="/skills">Skills</Link>
      </Grid>
      <Grid item>
        <Link href="/skills">Projects</Link>
      </Grid>
      <Grid item>
        <Link href="/skills">Experience</Link>
      </Grid>
      <Grid item>
        <Link href="/skills">Hobbies</Link>
      </Grid>
      <Grid item>
        <Link href="/skills">Contact</Link>
      </Grid>
    </Grid>
  );
};

export default Header;
