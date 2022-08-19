import React from "react";
import { Button } from "@material-ui/core";

const Jobs = props => {
  const { history } = props;
  return (
    <div className="jobs">
    <div className="btnWrapper">
      <Button className="btn" onClick={() => history.push("/jobs/engineer")}>engineer</Button>
      <Button className="btn" onClick={() => history.push("/jobs/marketer")}>marketer</Button>
      <Button className="btn" onClick={() => history.push("/jobs/designer")}>designer</Button>
    </div>
      <br/>
      <h2>Job Page</h2>
    </div>
  );
};

export default Jobs;
