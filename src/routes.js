import React from 'react';
import {Route, Switch} from "react-router-dom";

//Pages
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/404' component={PageNotFound}/>
        <Route path='*' component={PageNotFound}/>
    </Switch>
)
