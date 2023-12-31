import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, isAdmin, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAdmin ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default AdminRoute;