import { Typography } from "@material-ui/core";
import Head from "next/head";

const error = () => {
  return (
    <div>
      <Head>
        <title>Error</title>
      </Head>
      <Typography variant="h1">Error</Typography>
    </div>
  );
};

export default error;
