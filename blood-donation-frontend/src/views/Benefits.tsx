import UpperBar from "../components/UpperBar";
import BottomBar from "../components/BottomBar";
import React from "react";
import "../styles/Common.scss";
import "../styles/Benefits.scss";

function Benefits() {
	return (
		<div className="main-page-content">
			<UpperBar />
			<div className="subpage-title">
				<h1>Benefits</h1>
				<h2>Find out what you are entitled to</h2>
			</div>

			<div className="benefits-container">
				<div className="benefits-section">
					<h3>EACH DONOR HAS THE RIGHT TO:</h3>
					<ul>
						<li>A regenerative meal after each donation with a caloric value of 4500 kcal</li>
						<li>A reimbursement of money spent on travel to a blood donation point</li>
						<li>Obtain laboratory blood test results for free</li>
						<li>An income tax reduction dependent on the amount of donated blood</li>
						<li>A day off from work on the day of donation and health examination</li>
						<li>A reimbursement of lost earnings due to the absence from work on the day of donation</li>
					</ul>
				</div>
				<div className="benefits-section">
					<h3>EACH MERITORIOUS HONORARY DONOR HAS THE RIGHT TO:</h3>
					<ul>
						<li>Use healthcare services out of turn</li>
						<li>Cheaper or free use of public transport</li>
						<li>Discounts at selected stores, restaurants and hotels</li>
						<li>Discounts on medications and free access to hematopoietic drugs</li>
					</ul>
				</div>
			</div>

			<BottomBar />
		</div>
	);
}

export default Benefits;
