import React from "react";
import Homepage from "../components/Homepage";
import {BrowserRouter as Router,Switch, Route, Redirect} from "react-router-dom";


function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/reserves" component={Homepage} />
                <Route exact path="/localizations" component={Homepage} />
                <Route exact path="/quiz" component={Homepage} />
                <Route exact path="/benefits" component={Homepage} />
                <Route exact path="/knowledge" component={Homepage} />
                <Route exact path="/regulations" component={Homepage} />
                <Route exact path="/declaredonation" component={Homepage} />
                <Route exact path="/profile" component={Homepage} />
                <Route exact path="/login" component={Homepage} />
                <Route exact path="/register" component={Homepage} />
                <Redirect to={"/"} />
            </Switch>
        </Router>
    )
}


export default MainRouter;
