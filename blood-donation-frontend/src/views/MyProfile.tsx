import "../styles/Common.scss";
import "../styles/MyProfile.scss";
import React from "react";
import UpperBar from "../components/UpperBar";
import BottomBar from "../components/BottomBar";
import { useQuery } from "urql";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const UserQuery = `
  query {
    donationWithUser {
        donationId
        donationType
        place{
            city
            placeName
        }
        donor{
            isMale
        }
        amount
        time
    }
  }
`;

function buildRow(rowIdx: number, columns: any) {
	return (
		<tr key={columns[5]}>
			<td>{rowIdx}</td>
			<td>{columns[0]}</td>
			<td>{columns[1]}</td>
			<td>{columns[2]}</td>
			<td>{columns[3]}</td>
			<td>{columns[4]}</td>
		</tr>
	);
}

function createTableContent(data: any) {
	let typeConverter: any = {
		BLD: "Blood",
		PLT: "Platelets",
		PLM: "Plasma",
		ERT: "Erythrocytes",
		LEU: "Leukocytes",
	};
	let content: any = [];
	for (let i = 0; i < data.length; ++i) {
		const date = data[i]["time"].split("T")[0];
		const comp = typeConverter[data[i]["donationType"]];
		const amount = data[i]["amount"] + " ml";
		const city = data[i]["place"]["city"];
		const place = data[i]["place"]["placeName"];
		const key = data[i]["donation_id"];
		content.push(buildRow(data.length - i, [date, comp, amount, city, place, key]));
	}
	return content;
}

function MyProfile() {
	const navigate = useNavigate();
	const [userData] = useQuery({ query: UserQuery, requestPolicy: "cache-and-network" });
	if (userData.fetching)
		return (
			<div className="main-page-content">
				<UpperBar redirectHomeOnLogout={true} />
				<div className="subpage-title">
					<h1>Loading ...</h1>
				</div>
				<BottomBar />
			</div>
		);
	else if (userData.error)
		return (
			<div className="main-page-content">
				<UpperBar redirectHomeOnLogout={true} />
				<div className="subpage-title">
					<h1>You do not have permission to perform this action</h1>
					<h2>
						Please{" "}
						<span
							className="span-link"
							onClick={() => {
								navigate("/login");
							}}
						>
							login
						</span>{" "}
						and try again
					</h2>
				</div>
				<BottomBar />
			</div>
		);

	let progressPercent = 0;

	return (
		<div className="main-page-content">
			<UpperBar redirectHomeOnLogout={true} />

			<div className="my-profile-container">
				<div>
					<h5>YOUR CURRENT TITLE</h5>
				</div>
				<div>
					<h1 id="title-header" className="standout">
						{getUserTitle(userData)}
					</h1>
				</div>
				<div>
					<h5>ALREADY DONATED THE EQUIVALENCE OF</h5>
				</div>
				<div>
					<h2 id="equivalence-header" className="standout">
						{calculateBloodEquivalence(userData)} ml
					</h2>
				</div>
				<div>
					<h5>OF BLOOD</h5>
				</div>

				<div
					className={classNames({ hidden: userData["data"]["donationWithUser"].length })}
					style={{ margin: "5em 0" }}
				>
					<h2>We are glad that you joined our community</h2>
					<h2>
						Find a donation point on the{" "}
						<span
							className="span-link"
							onClick={() => {
								navigate("/localizations");
							}}
						>
							map
						</span>{" "}
						and start helping people
					</h2>
				</div>

				<div id="progress-outer" className={classNames({ hidden: !userData["data"]["donationWithUser"].length })}>
					<div id="progress-text">{handleProgressBar(userData)} TO THE NEXT TITLE</div>
					<div style={{ width: progressPercent + "%" }} id="progress-inner" />
				</div>

				<div className={classNames({ hidden: !userData["data"]["donationWithUser"].length })}>
					<table id="profile-stats">
						<thead>
							<tr id="profile-stats-header-row">
								<th>ID</th>
								<th>DATE</th>
								<th>COMPONENT</th>
								<th>AMOUNT</th>
								<th>CITY</th>
								<th>COLLECTION POINT</th>
							</tr>
						</thead>
						<tbody>{createTableContent(userData["data"]["donationWithUser"])}</tbody>
					</table>
				</div>
			</div>

			<BottomBar />
		</div>
	);

	function getUserTitle(request: any) {
		const data = request["data"]["donationWithUser"];
		const eqiv = parseInt(calculateBloodEquivalence(request));
		if (eqiv >= 20000) return "MERITORIOUS FOR THE HEALTH OF THE NATION";
		if (data && data.length > 0) {
			if (data[0]["donor"]["isMale"]) {
				if (eqiv >= 18000) return "MERITORIOUS HONORARY BLOOD DONOR, 1 Degree";
				if (eqiv >= 12000) return "MERITORIOUS HONORARY BLOOD DONOR, 2 Degree";
				if (eqiv >= 6000) return "MERITORIOUS HONORARY BLOOD DONOR, 3 Degree";
			}
			if (eqiv >= 15000) return "MERITORIOUS HONORARY BLOOD DONOR, 1 Degree";
			if (eqiv >= 10000) return "MERITORIOUS HONORARY BLOOD DONOR, 2 Degree";
			if (eqiv >= 5000) return "MERITORIOUS HONORARY BLOOD DONOR, 3 Degree";
		} else {
			return "CANDIDATE FOR BLOOD DONOR";
		}
		return "HONORARY BLOOD DONOR";
	}

	function calculateBloodEquivalence(request: any) {
		const donations = request["data"]["donationWithUser"];
		let equivalenceOfBlood = 0;
		for (let donation of donations) {
			let dType = donation["donationType"];
			let amount = donation["amount"];
			if (dType === "BLD") equivalenceOfBlood += amount;
			else if (dType === "PLM") equivalenceOfBlood += 200;
			else if (dType === "PLT" && amount <= 500) equivalenceOfBlood += 500;
			else if (dType === "PLT") equivalenceOfBlood += 1000;
			else if (dType === "ERT" && amount < 300) equivalenceOfBlood += 500;
			else if (dType === "ERT") equivalenceOfBlood += 1000;
			else if (dType === "LEU") equivalenceOfBlood += 2000;
		}
		return "" + equivalenceOfBlood;
	}

	function handleProgressBar(request: any) {
		const data = request["data"]["donationWithUser"];
		const eqiv = parseInt(calculateBloodEquivalence(request));

		if (eqiv >= 20000) {
			progressPercent = 100;
			return 100;
		}

		if (data && data.length > 0) {
			if (data[0]["donor"]["isMale"]) {
				if (eqiv >= 18000) {
					progressPercent = 100 - (20000 - eqiv) / 20;
					return 20000 - eqiv + " ml";
				}
				if (eqiv >= 12000) {
					progressPercent = 100 - (18000 - eqiv) / 60;
					return 18000 - eqiv + " ml";
				}
				if (eqiv >= 6000) {
					progressPercent = 100 - (12000 - eqiv) / 60;
					return 12000 - eqiv + " ml";
				}
				progressPercent = 100 - (6000 - eqiv) / 60;
				return 6000 - eqiv + " ml";
			}
			if (eqiv >= 15000) {
				progressPercent = 100 - (20000 - eqiv) / 50;
				return 20000 - eqiv + " ml";
			}
			if (eqiv >= 10000) {
				progressPercent = 100 - (15000 - eqiv) / 50;
				return 15000 - eqiv + " ml";
			}
			if (eqiv >= 5000) {
				progressPercent = 100 - (10000 - eqiv) / 50;
				return 10000 - eqiv + " ml";
			}
			progressPercent = 100 - (5000 - eqiv) / 50;
			return 5000 - eqiv + " ml";
		}
	}
}

export default MyProfile;
