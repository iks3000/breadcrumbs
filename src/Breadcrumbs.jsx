import React from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Typography
} from "@material-ui/core";
import { withRouter, Link } from "react-router-dom";

const Breadcrumbs = props => {
  const {
    history,
    location: { pathname }
  } = props;
  const pathnames = pathname.split("/").filter(x => x);
  return (
    <MUIBreadcrumbs >
      {pathnames.length > 0 ? (
        <Link to="/" onClick={() => history.push("/")}>Home</Link>
      ) : (
        <Typography>Home</Typography>
      )
      }
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link to={name} key={name} onClick={() => history.push(routeTo)}>
            {name}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default withRouter(Breadcrumbs);
