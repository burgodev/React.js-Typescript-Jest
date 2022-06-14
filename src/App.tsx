import { useEffect, useCallback } from "react";
import { withStyles } from "@material-ui/core";

import { Header, Footer, FoodList, Profile } from "./components";
import api from "./services/api";

interface IApp {
  classes: any;
}

const App = ({ classes }: IApp) => {
  const getData = useCallback(async () => {
    try {
      const response = await api.get("/profile");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className={classes.app}>
      <Header data-testid="header" />
      <main className={classes.container} data-testid="main">
        <Profile />
        <FoodList />
      </main>
      <Footer data-testid="footer" />
    </div>
  );
};

export default withStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
  },
  container: {
    background: "#efefef",
    padding: "1.5rem 1rem 2.5rem",
    width: "80vw",
    minHeight: "80vh",
    height: "auto",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    flexDirection: "column",
    borderRadius: 16,
  },
}))(App);
