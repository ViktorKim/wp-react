import React from 'react';
import {BrowserRouter as Route, Switch} from "react-router-dom";

//Pages
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='*' component={PageNotFound}/>
    </Switch>
)
