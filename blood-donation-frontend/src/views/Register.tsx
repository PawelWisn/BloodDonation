import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Common.scss";
import "../styles/Register.scss";
import Logo from "../images/logo_white.png";
import ManyRadiobuttons from "../components/ManyRadiobuttons";
import { useMutation } from "urql";

const UserRegisterMutation = `
  mutation CreateUser($email:String!,$password:String!, $isMale:Boolean) {
    createUser(email:$email, password:$password, isMale:$isMale) {
        user{
            email
        }
    }
  }
`;

function Register() {
	const [registerUserResult, registerUserCall] = useMutation(UserRegisterMutation);
	const navigate = useNavigate();

	function handleOnClick(url: string) {
		navigate(url);
	}

	return (
		<div className="reg-container">
			<div className="reg-logo">
				<img alt="logo" src={Logo} onClick={() => handleOnClick("/")} />
			</div>

			<div className="reg-content-container">
				<div className="entry-item">
					<label htmlFor="email">Email</label>
					<input id="email" type="text" />
				</div>
				<div className="entry-item" id="male-female-div">
					<ManyRadiobuttons name={"sex"} labels={["Male", "Female"]} values={["1", "0"]} ids={["sexm", "sexf"]} />
				</div>
				<div className="entry-item">
					<label htmlFor="password">Password</label>
					<input id="password" type="password" />
				</div>
				<div className="entry-item">
					<label htmlFor="confpassword">Confirm Password</label>
					<input id="confpassword" type="password" />
				</div>
				<div className="submit-button">
					<input
						type="submit"
						value="Register"
						onClick={(e) => {
							e.preventDefault();
							let data = collectDataForRequest();
							if (!data["ok"]) {
								alert(data["error"]);
							} else {
								registerUserCall(data["collection"]).then((r) => {
									if (r.error || !r["data"]["createUser"]) {
										alert("This email has been taken. Please pick a different one");
									} else {
										navigate("/login");
									}
								});
							}
						}}
					/>
				</div>
			</div>
		</div>
	);

	function collectDataForRequest() {
		let emailObj: any = document.getElementById("email");
		let email: string = emailObj ? emailObj["value"] : "";
		let passwordObj: any = document.getElementById("password");
		let password: string = passwordObj ? passwordObj["value"] : "";
		let confPasswordObj: any = document.getElementById("confpassword");
		let confPassword: string = confPasswordObj ? confPasswordObj["value"] : "";

		let sex: string = "";
		let sexObj = document.getElementById("male-female-div");
		if (sexObj) {
			let pickedObj = sexObj.getElementsByClassName("color-primary");
			if (pickedObj.length === 1) {
				let donated = pickedObj[0].getElementsByTagName("input");
				if (donated) {
					sex = donated[0].value;
				}
			}
		}

		if (sex !== "1" && sex !== "0") {
			return { ok: false, error: "Please select whether you are male or female", collection: [] };
		}

		let output = {
			email: email,
			password: password,
			confPassword: confPassword,
			isMale: sex === "1",
		};

		return validateRequestData(output);
	}

	function validateRequestData(collection: any) {
		if (!collection["email"].match(/.+?@.+?\..+/)) {
			return { ok: false, error: "Please provide a valid email address" };
		}
		if (collection["password"].length === 0) {
			return { ok: false, error: "Please type in a password" };
		}
		if (collection["password"].length <= 6) {
			return { ok: false, error: "Please type password longer than 6 characters" };
		}
		if (collection["confPassword"].length === 0) {
			return { ok: false, error: "Please confirm your password" };
		}
		if (collection["confPassword"] !== collection["password"]) {
			return { ok: false, error: "Passwords are not identical" };
		}
		return { ok: true, collection: collection };
	}
}

export default Register;
