import React from "react";
import { Route, Switch } from "react-router-dom";
import { RootPage } from "./pages/root-page";
import { RegionPage } from "./pages/region-page";
import { NotFoundPage } from "./pages/not-found-page";

export const routes = (
    <Switch>
        <Route path="/" exact={true} component={RootPage} />
        <Route path="/notfound" exact={true} component={NotFoundPage} />
        <Route path="/:order" exact={true} component={RegionPage} />
        <Route component={NotFoundPage} />
    </Switch>
);
