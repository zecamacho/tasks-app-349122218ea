import { Container, Grid, Stack, StackProps, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";

export const Layout = () => {
  return (
    <Container maxWidth={"lg"} sx={{ p: 2 }}>
      <Typography variant="h5">Tasks App</Typography>
      <Navbar />
      <Grid container>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export const Row = (props: StackProps) => <Stack direction="row" {...props} />;
export const Col = (props: StackProps) => <Stack {...props} />;
