  
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import routerPaths from "services/shared/routerPaths";
import Home from "components/home";
import Login from "components/login";
import Register from "components/register";
import Account from "components/account";

function routes() {
  return (
    <Router>
      <Route exact path={routerPaths.Root} component={Home} />
      <Route exact path={ routerPaths.Login} component={Login}/>
      <Route exact path={ routerPaths.Register} component={Register}/>
      <Route exact path={ routerPaths.Account} component={Account}/>
    </Router>
  );
}

export default routes;