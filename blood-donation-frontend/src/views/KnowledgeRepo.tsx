import UpperBar from "../components/UpperBar";
import BottomBar from "../components/BottomBar";
import React from "react";
import "../styles/Common.scss";
import "../styles/KnowledgeRepo.scss";
import PopupButton from "../components/PopupButton";

function KnowledgeRepo() {
	return (
		<div className="main-page-content">
			<UpperBar />
			<div className="subpage-title">
				<h1>Knowledge Repository</h1>
				<h2>Improve your understanding of blood</h2>
			</div>

			<div className="knowledge-container">
				<div className="knowledge-item">
					<PopupButton
						message="What is blood and what is its meaning?"
						popupMessage="Blood is the fluid that carries substances between cells. It consists of, among others, plasma, platelets, red and white blood cells. Its most important task is to broadcast oxygen over the body. It also serves as the body's defensive function and helps heal wounds."
					/>
				</div>
				<div className="knowledge-item">
					<PopupButton
						message="How do blood types work?"
						popupMessage="Blood can be divided into groups depending on the presence of antigens on red blood cells. People having group A have only A antigen, people having B only have B antigen. People having AB have both antigens. Group 0 means no antigens. Another element is the Rh factor. If one has the D antigen it is referred to as Rh +. Otherwise it is Rh-."
					/>
				</div>
				<div className="knowledge-item">
					<PopupButton
						message="What are the rarest blood types?"
						popupMessage="The prevalence of different blood groups varies by region and race. The most popular groups in Poland are ARh+ (32%) and 0Rh+ (31%). The BRh+ (15%) is slightly less common. Less frequent groups include ABRh+ (7%), ORh- (6%), ARh- (6%) and BRh- (2%). The rarest group is ABRh- (1%)."
					/>
				</div>
				<div className="knowledge-item">
					<PopupButton
						message="What should one do before and after donation?"
						popupMessage="Before donating blood, remember to hydrate your body and eat a light, fat-free meal. You must not smoke for two hours before the procedure. After the donation, you should not overstrain yourself or stay in stuffy rooms. Provide the body with the carbohydrates it needs to replenish missing blood."
					/>
				</div>
				<div className="knowledge-item">
					<PopupButton
						message="What does the donation process look like?"
						popupMessage="The process begins with an basic health examination. The blood donation procedure is painless and usually takes 10 to 90 minutes, depending on the component donated. Blood is drawn from a vein in the elbow. The donor can choose the arm. After it is finished, it is good to rest for several minutes."
					/>
				</div>
				<div className="knowledge-item">
					<PopupButton
						message="Who do you help by donating blood?"
						popupMessage="By donating blood you help, among others, victims of accidents, people undergoing complicated surgical operations, people suffering from bone marrow diseases and hemophilia."
					/>
				</div>
			</div>

			<BottomBar />
		</div>
	);
}

export default KnowledgeRepo;
