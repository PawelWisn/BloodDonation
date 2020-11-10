import React from "react";
import Homepage from "../components/Homepage";
import Benefits from "../components/Benefits";
import Login from "../components/Login";
import Register from "../components/Register";
import LegalReg from "../components/LegalReg";
import KnowledgeRepo from "../components/KnowledgeRepo";
import Quiz from "../components/Quiz";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import CollectionPoints from "../components/CollectionPoints";
import BloodReserves from "../components/BloodReserves";


function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/reserves" component={BloodReserves}/>
                <Route exact path="/localizations" component={CollectionPoints}/>
                <Route exact path="/quiz" component={Quiz}/>
                <Route exact path="/benefits" component={Benefits}/>
                <Route exact path="/knowledge" component={KnowledgeRepo}/>
                <Route exact path="/regulations" component={LegalReg}/>
                <Route exact path="/declaredonation" component={Homepage}/>
                <Route exact path="/profile" component={Homepage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Redirect to={"/"}/>
            </Switch>
        </Router>
    )
}


export default MainRouter;
