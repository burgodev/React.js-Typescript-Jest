import { useState, useEffect, useCallback } from "react";
import { withStyles, Avatar, Typography } from "@material-ui/core";

import api from "../services/api";

interface IProfile {
  name: string;
  jobTitle: string;
  image: string;
}

interface IProfileComponent {
  classes: any;
  profileData?: IProfile;
}

const Profile = ({ classes, profileData }: IProfileComponent) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [profile, setData] = useState<IProfile>(profileData || defaultData);

  const getData = useCallback(async () => {
    try {
      const { data } = await api.get("/profile");
      setData(data.payload);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => setLoading(false), 750);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  console.log(loading);

  // if (loading) return <Typography>loading...</Typography>;

  return (
    <>
      <Avatar
        data-testid="image"
        className={classes.avatar}
        alt=""
        src={profile.image}
      />
      <Typography variant="h1" className={classes.title} data-testid="name">
        {profile.name}
      </Typography>
      <Typography variant="subtitle1" data-testid="job">
        {profile.jobTitle}
      </Typography>
    </>
  );
};

const defaultData: IProfile = {
  name: "",
  jobTitle: "",
  image: "",
};

export default withStyles((theme) => ({
  avatar: {
    height: "10rem",
    width: "10rem",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "2.5rem",
  },
}))(Profile);
