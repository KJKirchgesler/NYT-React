// Include the React library, Router and related components
import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// Reference the high-level components
import Main from "../components/Main";
import Search from "../components/Search";
import Saved from "../components/Saved";

// Export the Routes
export default (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Search" component={Search} />
      <Route path="Saved" component={Saved} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Search} />

    </Route>
  </Router>
);
