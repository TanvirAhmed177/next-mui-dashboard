import { Box, Container, Grid } from "@material-ui/core";

import Newleds from "../components/Newleds";
import Sales from "../components/Sales";
import Orders from "../components/Orders";
import Expense from "../components/Expense";
import Head from "next/head";

const dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box>
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Newleds />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Sales />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Orders />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Expense sx={{ height: "100%" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default dashboard;
