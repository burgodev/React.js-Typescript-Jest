import { useState, useEffect, useCallback } from "react";
import { withStyles, Avatar, Typography, Grid, Theme } from "@material-ui/core";

import api from "../services/api";

interface IFoodListComponent {
  classes: any;
  list?: IFood[];
}

interface IFood {
  title: string;
  id: number;
  description: string;
  image: string;
}

const FoodList = ({ classes, list }: IFoodListComponent) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [foodList, setFoodList] = useState<IFood[]>(list ?? []);

  const getData = useCallback(async () => {
    try {
      const { data } = await api.get("/food");
      setFoodList(data.payload);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  console.log(loading);
  // if (loading)
  //   return (
  //     <Typography variant="h5" className={classes.loading}>
  //       loading...
  //     </Typography>
  //   );

  return (
    <>
      {foodList.map(({ id, title, description, image }) => (
        <Grid key={id} container className={classes.grid} alignItems="center">
          <Grid item xs={12} md={4} className={classes.gridImage}>
            <Avatar
              src={image}
              alt={title}
              className={classes.image}
              data-testid="image"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography className={classes.title} data-testid="title">
              {title}
            </Typography>
            <Typography
              paragraph
              data-testid="description"
              className={classes.description}
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default withStyles((theme: Theme) => ({
  image: {
    height: "10rem",
    width: "10rem",
    margin: "1rem 0",
  },
  grid: {
    width: "50%",
    margin: "0.5rem 0",
    [theme.breakpoints.only("lg")]: {
      width: "60%",
    },
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
  },
  title: {
    fontSize: "1.5rem",
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
    },
  },
  gridImage: {
    display: "flex",
    justifyContent: "center",
  },
  loading: {
    margin: "auto",
  },
  description: {
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
    },
  },
}))(FoodList);
