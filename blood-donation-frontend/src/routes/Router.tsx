import React from "react";
import Homepage from "../views/Homepage";
import Benefits from "../views/Benefits";
import Login from "../views/Login";
import Register from "../views/Register";
import LegalReg from "../views/LegalReg";
import KnowledgeRepo from "../views/KnowledgeRepo";
import Quiz from "../views/Quiz";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import CollectionPoints from "../views/CollectionPoints";
import BloodReserves from "../views/BloodReserves";
import RegisterDonation from "../views/RegisterDonation";
import MyProfile from "../views/MyProfile";


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
                <Route exact path="/declaredonation" component={RegisterDonation}/>
                <Route exact path="/profile" component={MyProfile}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Redirect to={"/"}/>
            </Switch>
        </Router>
    )
}


export default MainRouter;
