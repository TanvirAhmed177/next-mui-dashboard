import Nav from "./Nav";
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/styles";

const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Nav></Nav>

        <Box component="main" sx={{ flexGrow: 1, px: 3, py: 12 }}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
