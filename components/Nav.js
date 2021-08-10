import Link from "next/link";
import * as React from "react";
import { styled, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import MuiDrawer from "@material-ui/core/Drawer";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import Image from "next/image";
import user from "../images/adult-facial-expression-fashion-1036627.png";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import TableChartOutlinedIcon from "@material-ui/icons/TableChartOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ShopTwoOutlinedIcon from "@material-ui/icons/ShopTwoOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import SettingsApplicationsOutlinedIcon from "@material-ui/icons/SettingsApplicationsOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";

import { useRouter } from "next/router";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const useStyles = makeStyles((theme) => ({
  navItem: {
    transition: "all 150ms ease-in",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  navItemActive: {
    backgroundColor: "#7D48B1",
  },
  activeSpan: {
    display: "block",

    marginLeft: "0 auto",
  },
}));

const NavBar = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "none",
});
const SearchField = styled(TextField)({
  backgroundColor: "white",
  borderRadius: "25px",
  paddingLeft: "5px",
});
const NavList = styled(List)({
  display: "flex",
  padding: "0px",
  marginLeft: "auto",
});
const NavListItem = styled(ListItem)({
  marginRight: "-45px",
  color: "#663399",
  cursor: "pointer",
});
const SideNavListItem = styled(ListItemIcon)({
  color: "#c6b2d9",
  display: "flex",
  flexDirection: "column",
});
export default function Nav() {
  const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const router = useRouter();

  return (
    <>
      <CssBaseline />
      <NavBar position="fixed" open={open}>
        <Toolbar sx={{ ml: 10 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: "#663399" }} />
          </IconButton>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <SearchField
              id="outlined-basic"
              variant="standard"
              placeholder="Search"
              InputProps={{
                startAdornment: <SearchIcon />,
                disableUnderline: true, // <== added this
              }}
            />
          </Box>
          <NavList>
            <NavListItem dense>
              <ListItemIcon>
                <AddIcon sx={{ color: "#663399" }} />
              </ListItemIcon>
            </NavListItem>
            <NavListItem dense>
              <ListItemIcon>
                <NotificationsActiveIcon sx={{ color: "#663399" }} />
              </ListItemIcon>
            </NavListItem>
            <ListItem dense>
              <ListItemIcon>
                <Image src={user} height="50px" width="50px" />
              </ListItemIcon>
            </ListItem>
          </NavList>
        </Toolbar>
      </NavBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ margin: "auto" }}>
            <Link href="/">
              <Typography variant="h3" color="white">
                Gull
              </Typography>
            </Link>

            <ChevronLeftIcon
              sx={{
                ...(open || { display: "none" }),
                color: "white",
                ml: 17,
              }}
            />
          </IconButton>
        </DrawerHeader>

        <List>
          <Link href="/dashboard">
            <ListItem
              button
              className={
                router.pathname == "/dashboard" ? classes.navItemActive : ""
              }
            >
              <SideNavListItem>
                <DashboardOutlinedIcon />
                <Typography
                  variant="h6"
                  sx={{ display: "none", marginLeft: "-8px" }}
                  className={
                    router.pathname == "/dashboard" ? classes.activeSpan : ""
                  }
                >
                  Dashboard
                </Typography>
              </SideNavListItem>
              <ListItemText secondary="Dashboard" />
            </ListItem>
          </Link>
          <Link href="/table">
            <ListItem
              button
              className={
                router.pathname == "/table" ? classes.navItemActive : ""
              }
            >
              <SideNavListItem>
                <TableChartOutlinedIcon />
                <Typography
                  variant="h6"
                  sx={{ display: "none" }}
                  className={
                    router.pathname == "/table" ? classes.activeSpan : ""
                  }
                >
                  Table
                </Typography>
              </SideNavListItem>
              <ListItemText secondary="Table" />
            </ListItem>
          </Link>
          <Link href="/customer">
            <ListItem
              button
              className={
                router.pathname == "/customer" ? classes.navItemActive : ""
              }
            >
              <SideNavListItem>
                <PeopleAltOutlinedIcon />
                <Typography
                  variant="h6"
                  sx={{ display: "none", marginLeft: "-8px" }}
                  className={
                    router.pathname == "/customer" ? classes.activeSpan : ""
                  }
                >
                  Customer
                </Typography>
              </SideNavListItem>

              <ListItemText secondary="Customer" />
            </ListItem>
          </Link>
          <Link href="/product">
            <ListItem
              button
              className={
                router.pathname == "/product" ? classes.navItemActive : ""
              }
            >
              <SideNavListItem>
                <ShopTwoOutlinedIcon />
                <Typography
                  variant="h6"
                  sx={{ display: "none", marginLeft: "-5px" }}
                  className={
                    router.pathname == "/product" ? classes.activeSpan : ""
                  }
                >
                  Product
                </Typography>
              </SideNavListItem>
              <ListItemText secondary="Product" />
            </ListItem>
          </Link>
          <Link href="/account">
            <ListItem
              button
              className={
                router.pathname == "/account" ? classes.navItemActive : ""
              }
            >
              <SideNavListItem>
                <AccountBoxOutlinedIcon />
                <Typography
                  variant="h6"
                  sx={{ display: "none", marginLeft: "-5px" }}
                  className={
                    router.pathname == "/account" ? classes.activeSpan : ""
                  }
                >
                  Account
                </Typography>
              </SideNavListItem>
              <ListItemText secondary="Account" />
            </ListItem>
          </Link>
          <Link href="/setting">
            <ListItem
              button
              className={
                router.pathname == "/setting" ? classes.navItemActive : ""
              }
            >
              <SideNavListItem>
                <SettingsApplicationsOutlinedIcon />
                <Typography
                  variant="h6"
                  sx={{ display: "none" }}
                  className={
                    router.pathname == "/setting" ? classes.activeSpan : ""
                  }
                >
                  Setting
                </Typography>
              </SideNavListItem>
              <ListItemText secondary="Setting" />
            </ListItem>
          </Link>
          <Link href="/login">
            <ListItem
              button
              className={
                router.pathname == "/login" ? classes.navItemActive : ""
              }
            >
              <SideNavListItem>
                <LockOpenOutlinedIcon />
                <Typography
                  variant="h6"
                  sx={{ display: "none" }}
                  className={
                    router.pathname == "/login" ? classes.activeSpan : ""
                  }
                >
                  Login
                </Typography>
              </SideNavListItem>
              <ListItemText secondary="Login" />
            </ListItem>
          </Link>
          <Link href="/register">
            <ListItem
              button
              className={
                router.pathname == "/register" ? classes.navItemActive : ""
              }
            >
              <SideNavListItem>
                <PersonAddOutlinedIcon />
                <Typography
                  variant="h6"
                  sx={{ display: "none" }}
                  className={
                    router.pathname == "/register" ? classes.activeSpan : ""
                  }
                >
                  Register
                </Typography>
              </SideNavListItem>
              <ListItemText secondary="Register" />
            </ListItem>
          </Link>
          <Link href="/error">
            <ListItem
              button
              className={
                router.pathname == "/error" ? classes.navItemActive : ""
              }
            >
              <SideNavListItem>
                <ErrorOutlineOutlinedIcon />
                <Typography
                  variant="h6"
                  sx={{ display: "none" }}
                  className={
                    router.pathname == "/error" ? classes.activeSpan : ""
                  }
                >
                  Error
                </Typography>
              </SideNavListItem>
              <ListItemText secondary="Error" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
}
