import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";
import Page404 from "../pages/Page404/Page404";

import SingleItemPage from "../pages/SingleItemPage/SingleItemPage";
import SingleItemPageKurs from "../pages/SinglePageItemKurs/SinglePageItemKurs";
import links from "../links/links";

function Routes() {
  return (
    <Router basename="">
      <Switch>
        <Route
          exact
          path={links.landing.url}
          component={LandingPage}
          title="Home"
        />
        <Route
          exact
          path={links.home.url}
          component={LandingPage}
          title="Home"
        />
    
 
        <Route
          exact
          path={links.itemId.url}
          component={SingleItemPage}
          title="Item"
        />

      <Route
          exact
          path={links.itemKursId.url}
          component={SingleItemPageKurs}
          title="ItemKurs"
        />
        <Route path={links.any.url} component={Page404} title="404" />
      </Switch>
    </Router>
  );
}

export default Routes;
