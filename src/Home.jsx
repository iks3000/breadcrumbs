import React from "react";
import { Button } from "@material-ui/core";

const Home = props => {
  const { history } = props;
  return (
    <div className="home">
      <Button variant="contained" onClick={() => history.push("/about")}>ABOUT</Button>
      <Button variant="contained" onClick={() => history.push("/jobs")}>JOBS</Button>
    </div>
  );
};

export default Home;
