import React from "react";
import { withStyles, Typography } from "@material-ui/core";

const styles = {
  root: {},
};

const Footer: React.FC = () => {
  return (
    <footer data-testid="footer">
      <Typography data-testid="typography">
        Copyright. All rights reserved
      </Typography>
    </footer>
  );
};

export default withStyles(styles)(Footer);
