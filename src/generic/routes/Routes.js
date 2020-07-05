import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import HomePage from "@modules/home/pages/HomePage";
import PublicRoute from "./PublicRoute";
import PublicLayout from "./layouts/PublicLayout";

export default () => (
  <Router autoScrollToTop>
    <PublicRoute
      exact
      path="/"
      layout={PublicLayout}
      component={(props) => <HomePage {...props} />}
    />
  </Router>
);
