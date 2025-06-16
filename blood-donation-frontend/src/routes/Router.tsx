import React from "react";
import Homepage from "../views/Homepage";
import Benefits from "../views/Benefits";
import Login from "../views/Login";
import Register from "../views/Register";
import LegalReg from "../views/LegalReg";
import KnowledgeRepo from "../views/KnowledgeRepo";
import Quiz from "../views/Quiz";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CollectionPoints from "../views/CollectionPoints";
import BloodReserves from "../views/BloodReserves";
import RegisterDonation from "../views/RegisterDonation";
import MyProfile from "../views/MyProfile";

function MainRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/reserves" element={<BloodReserves />} />
				<Route path="/localizations" element={<CollectionPoints />} />
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/benefits" element={<Benefits />} />
				<Route path="/knowledge" element={<KnowledgeRepo />} />
				<Route path="/regulations" element={<LegalReg />} />
				<Route path="/declaredonation" element={<RegisterDonation />} />
				<Route path="/profile" element={<MyProfile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</Router>
	);
}

export default MainRouter;
