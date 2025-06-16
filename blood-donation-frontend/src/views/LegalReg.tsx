import UpperBar from "../components/UpperBar";
import BottomBar from "../components/BottomBar";
import React from "react";
import LegalRegArticle from "../components/LegalRegArticle";
import "../styles/Common.scss";
import "../styles/LegalReg.scss";

function LegalReg() {
	return (
		<div className="main-page-content">
			<UpperBar />
			<div className="subpage-title">
				<h1>Legal Regulations</h1>
				<h2>Check the rules that govern blood donation</h2>
			</div>

			<div className="legal-regulations-container">
				<ul>
					<li>
						<LegalRegArticle
							art="Dz.U. 2004 nr 261 p. 2602"
							date="09-12-2004"
							name="Regulation on the caloric value of a regenerative meal after donation"
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20042612602"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2014 p. 1632"
							date="24-11-2014"
							name="Announcement on the method of justifying absences from work for employees"
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20140001632"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2017 p. 1741"
							date="15-09-2017"
							name="Regulation on the conditions for collecting blood from blood donors"
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20170001741"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2017 p. 1742"
							date="15-09-2017"
							name="Regulation on medals obtained in exchange for being a blood donor"
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20170001742"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2017 p. 1677"
							date="16-09-2017"
							name='Regulation on the award "Blood Donor - Meritorious for the Health of the Nation"'
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20170001677"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2016 p. 1845"
							date="16-11-2016"
							name="Regulation on the labeling of blood and its components"
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20160001845"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2015 p. 2098"
							date="10-12-2015"
							name='Announcement on the unified list of medicines for beneficiaries holding the title of "Meritorious Honorary Blood Donor"'
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20170000235"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2005 nr 109 p. 918"
							date="01-01-2006 "
							name="Regulation on the method of keeping a blood donor registered"
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20051090918"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2011 nr 112 p. 654"
							date="01-07-2011"
							name="Act on medical activity"
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=wdu20111120654"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2017 p. 646"
							date="11-04-2017"
							name="Regulation on quality assurance requirements and quality measurement results for blood and its components"
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20170000646"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2017 p. 2051"
							date="07-11-2017"
							name="Regulation on the treatment of blood and its components in health care entities"
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20170002051"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2017 p. 235"
							date="10-09-2017"
							name="Regulation on the definition of rare blood groups and its components, the obtaining of which requires additional processes"
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20170000235"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2004 nr 210 p. 2135"
							date="01-10-2004"
							name="Act on healthcare services financed from public funds"
							link="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20042102135"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2019 p. 1222"
							date="02-07-2019"
							name="Announcement on the publication of the consolidated text of the Act on the public blood service"
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20190001222"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2020 p. 1768"
							date="01-01-2021"
							name="Regulation on the determination of fees for blood and its components in 2021"
							link="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20200001768"
						/>
					</li>
					<li>
						<LegalRegArticle
							art="Dz.U. 2004 nr 243 p. 2433"
							date="01-01-2005"
							name="Regulation on the establishment of the Military Center for Blood Donation and Blood Treatment"
							link="http://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20042432433"
						/>
					</li>
				</ul>
			</div>

			<BottomBar />
		</div>
	);
}

export default LegalReg;
