import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import bluegrey from "@material-ui/core/colors/blueGrey";
import green from "@material-ui/core/colors/green";
import indigo from "@material-ui/core/colors/indigo";
import orange from "@material-ui/core/colors/orange";
import CssBaseline from "@material-ui/core/CssBaseline";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: bluegrey[300],
      main: bluegrey[500],
      dark: bluegrey[700]
    },
    secondary: {
      light: bluegrey[50],
      main: indigo[500],
      dark: indigo[700]
    }
  },
  typography: {
    useNextVariants: true
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* https://material-ui.com/getting-started/usage/#cssbaseline */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
