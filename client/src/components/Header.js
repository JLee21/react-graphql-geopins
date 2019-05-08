import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MapIcon from "@material-ui/icons/Map";
import Typography from "@material-ui/core/Typography";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";

import Context from "../context";
import Signout from "../components/Auth/Signout";

const Header = ({ classes }) => {
  const { state } = useContext(Context);
  const mobileSize = useMediaQuery("(max-width:600px)");
  const { currentUser } = state;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.grow}>
            <MapIcon className={classes.icon} />
            <Typography
              className={mobileSize ? classes.mobile : ""}
              component="h1"
              variant="h6"
              color="inherit"
            >
              GeoPins
            </Typography>
            {currentUser && (
              <div className={classes.grow}>
                <img
                  className={classes.picture}
                  src={currentUser.picture}
                  alt={currentUser.name}
                />
                <Typography
                  className={mobileSize ? classes.mobile : ""}
                  variant="h5"
                  color="inherit"
                >
                  {currentUser.name}
                </Typography>
              </div>
            )}
          </div>
          <Signout />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: theme.palette.secondary.light
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    marginRight: theme.spacing.unit,
    color: theme.palette.secondary.light,
    fontSize: 35
  },
  mobile: {
    display: "none"
  },
  picture: {
    marginLeft: theme.spacing.unit * 4,
    height: "40px",
    borderRadius: "90%",
    marginRight: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(Header);
