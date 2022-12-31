import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Drawer from "../components/Drawer";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar position="stickey">
        <Toolbar>
          {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}
          {isMatch ? (
            <>
              <Drawer />
            </>
          ) : (
            <>
              <Tabs
                sx={{ margin: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" />
                <Tab label="Products" />
                <Tab label="Fonts" />
                <Tab label="Blog" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
