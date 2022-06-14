import React from "react";
import { withStyles, Typography } from "@material-ui/core";

const styles = {
  root: {},
};

const Footer: React.FC = (props) => {
  return (
    <footer {...props}>
      <Typography data-testid="typography">
        Copyright. All rights reserved
      </Typography>
    </footer>
  );
};

export default withStyles(styles)(Footer);
