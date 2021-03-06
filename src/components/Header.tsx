import React from "react";
import { withStyles, Typography } from "@material-ui/core";

const styles = {
  root: {},
};

const Header: React.FC = () => (
  <header data-testid="header">
    <Typography data-testid="typography">My Header</Typography>
  </header>
);

export default withStyles(styles)(Header);
