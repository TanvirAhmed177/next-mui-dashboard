import { ThemeProvider } from "@material-ui/core";
import Layout from "../components/Layout";
import "../styles/globals.css";
import theme from "./../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
