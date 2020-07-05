import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.node.isRequired,
};

export default PublicRoute;
