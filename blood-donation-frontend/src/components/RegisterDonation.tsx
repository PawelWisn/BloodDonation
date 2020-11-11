import './Common.scss';
import './RegisterDonation.scss';
import UpperBar from "./UpperBar";
import React, {useState} from "react";
import BottomBar from "./BottomBar";
import ManyRadiobuttonsNoDefault from "./ManyRadiobuttonsNoDefault";
import classNames from "classnames";

let data = [
    {
        "city": "Barlinek",
        "placeName": "RCKiK Szczecin Mobile Barlinek",
        "address": "Szpitalna 8",
        "isMobilePoint": true,
        "latitude": "52.9967477",
        "longitude": "15.2212969"
    },
    {
        "city": "Bartoszyce",
        "placeName": "RCKiK Olsztyn OT Bartoszyce",
        "address": "Wyszynskiego 11",
        "isMobilePoint": false,
        "latitude": "54.2586528",
        "longitude": "20.7964833"
    },
    {
        "city": "Belchatow",
        "placeName": "RCKiK Lodz Mobile Belchatow",
        "address": "Edwardow 3A",
        "isMobilePoint": true,
        "latitude": "51.3571705",
        "longitude": "19.364955"
    }]


function RegisterDonation() {
    const [newLocHidden, setNewLocHidden] = useState(true);

    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Register Donation</h1>
                <h2>Add your donation to your account</h2>
            </div>

            <div className='reg-don-container'>
                <div>
                    <h4>Choose your donation point from the list</h4>
                </div>

                <select id="drop-down-points">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="vw">VW</option>
                    <option value="audi" selected>Audi</option>
                </select>
                <div className='left-aligned-div'>
                    <input type="text" id="filter-city" name="filter-city" placeholder="Filter by city"/>
                </div>

                <div id='not-found-div'>
                    <div onClick={()=>{setNewLocHidden(false)}}>
                        <h4>Not found? Add it to the catalog</h4>
                    </div>
                    <div className={classNames('new-loc-div', {'hidden': newLocHidden})}>
                            <div className='new-loc-entry-item'>
                                <div>
                                    <p>Institution name</p>
                                </div>
                                <div>
                                    <input id='institution-name' type='text'/>
                                </div>
                            </div>
                        <div className='new-loc-entry-item'>
                            <div>
                                <p>Institution address</p>
                            </div>
                            <div>
                                <input id='institution-address' type='text'/>
                            </div>
                        </div>
                        <div className='new-loc-entry-item'>
                            <div>
                                <p>Institution city</p>
                            </div>
                            <div>
                                <input id='institution-city' type='text'/>
                            </div>
                        </div>
                        <div id='is-new-loc-mobile-div'>
                            <ManyRadiobuttonsNoDefault name={'new-loc-mobile'} labels={['Is a mobile point']}
                                                       values={'0'} ids={'new-loc-mobile-radio'}/>
                        </div>
                    </div>
                </div>

            </div>


            <BottomBar/>
        </div>
    );
}

export default RegisterDonation;
