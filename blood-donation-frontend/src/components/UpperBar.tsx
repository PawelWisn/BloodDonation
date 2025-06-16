import React, { useState } from "react";
import "../styles/UpperBar.scss";
import Logo from "../images/logo_red.png";
import { useNavigate } from "react-router-dom";
import { getToken, deleteToken } from "./utils";

type propsType = {
	redirectHomeOnLogout?: boolean;
};

function UpperBar(props: propsType) {
	const [isAuth, setIsAuth] = useState(getToken() != null);
	const navigate = useNavigate();
	const { redirectHomeOnLogout = false } = props;
	return (
		<div className="upper-bar flex-container-upper-bar">
			<img alt="logo" src={Logo} onClick={() => navigate("/")} />
			<LoginRegLogoutButtons />
		</div>
	);

	function LoginRegLogoutButtons() {
		if (isAuth) {
			return <LoggedIn />;
		}
		return <NotLoggedIn />;
	}

	function NotLoggedIn() {
		const navigate = useNavigate();
		return (
			<div className="flex-container-upper-bar">
				<button onClick={() => navigate("/login")}>Login</button>
				<button onClick={() => navigate("/register")}>Register</button>
			</div>
		);
	}

	function LoggedIn() {
		const navigate = useNavigate();
		return (
			<div className="flex-container-upper-bar">
				<button
					onClick={() => {
						deleteToken();
						setIsAuth(false);
						if (redirectHomeOnLogout) {
							navigate("/");
						}
					}}
				>
					Logout
				</button>
			</div>
		);
	}
}

export default UpperBar;
