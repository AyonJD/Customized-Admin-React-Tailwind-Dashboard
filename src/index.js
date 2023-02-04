import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

const user = 'Ayon'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/dashboard" component={Admin} />
      <Route path="/auth" component={Auth} />
      {user ? <Redirect from="/" to="/dashboard" /> : <Redirect from="/" to="/auth/login" />}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
