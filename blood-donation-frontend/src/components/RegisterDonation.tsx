import './Common.scss';
import './RegisterDonation.scss';
import UpperBar from "./UpperBar";
import React, {useState} from "react";
import BottomBar from "./BottomBar";
import ManyRadiobuttonsNoDefault from "./ManyRadiobuttonsNoDefault";
import classNames from "classnames";
import ManyRadiobuttons from "./ManyRadiobuttons";
import {useQuery} from "urql";

// const RegisterDonationMutation = `
//
// `;
const LocalizationsQuery = `
  query {
    allLocalizations {
        city    
        placeName
        address
        isMobilePoint
        latitude
        longitude
    }
  }
`;

function RegisterDonation() {
    const [newLocHidden, setNewLocHidden] = useState(true);
    const [optionList, setOptionList] = useQuery({'query': LocalizationsQuery});
    if (optionList.fetching) return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Loading ...</h1>
            </div>
            <BottomBar/>
        </div>
    )
    if (optionList.error) return (
        <div className="main-page-content">
            <UpperBar/>
            <div>
                <h1>Error! Please try again</h1>
            </div>
            <BottomBar/>
        </div>
    )
    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Register Donation</h1>
                <h2>Add your donation to your account</h2>
            </div>

            <div className='reg-don-container'>
                <div>
                    <h3>Choose your donation point from the list</h3>
                </div>

                <select id="drop-down-points">
                    {generateOptions(optionList['data']['allLocalizations'])}
                </select>
                <div className='left-aligned-div'>
                    <input type="text" id="filter-city" name="filter-city" placeholder="Filter by city"
                           onKeyUp={() => {
                               setOptionList(filterByCity(optionList['data']['allLocalizations']))
                           }}/>
                </div>

                <div id='not-found-div'>
                    <div>
                        <h3>Not found? <span onClick={() => {
                            setNewLocHidden(false);
                        }}>Click here and add it to the catalog</span></h3>
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
                                                       values={'0'} ids={['new-loc-mobile-radio']}/>
                        </div>
                    </div>
                </div>

                <div id='what-donated-header'>
                    <h3>What did you donate?</h3>
                </div>
                <div id='reg-what-donated-div'>
                    <ManyRadiobuttons name={'what-donated'}
                                      labels={['BLOOD', 'PLASMA', 'PLATELETS', 'LEUKOCYTES', 'ERYTHROCYTES']}
                                      values={['BLD', 'PLM', 'PLT', 'LEU', 'ERT']}
                                      ids={['optBLD', 'optPLM', 'optPLT', 'optLEU', 'optERT']}/>
                </div>
                <div className='reg-radio-flex-container'>
                    <div className='reg-inline-inputs'>
                        <div>
                            <p>How much?</p>
                        </div>
                        <div>
                            <input type='text' id='reg-how-much' placeholder='0 ml'/>
                        </div>
                    </div>
                    <div className='reg-inline-inputs'>
                        <div>
                            <p>When?</p>
                        </div>
                        <div>
                            <input type='text' id='reg-when' placeholder='yyyy-mm-dd'/>
                        </div>
                    </div>

                </div>

                <div id='remainder-div'>
                    <ManyRadiobuttons name={'reminderButton'} labels={['Remind me when I can donate again']}
                                      values={'0'} ids={['reminderButton']}/>
                </div>

                <div id='apply-donation-button'>
                    <input type='submit' value='Submit' onClick={(e) => {
                        e.preventDefault();
                        collectDataForRequest();
                    }}/>
                </div>
            </div>


            <BottomBar/>
        </div>
    );

    function filterByCity(data: any) {
        let cityObj = document.getElementById('filter-city') as HTMLInputElement;
        let cityString = cityObj ? cityObj.value : '';
        cityString = cityString.toLowerCase()
        return data.filter((item: any) => {
            if (!item['city']) {
                return false
            }
            return item['city'].toLowerCase().startsWith(cityString);
        })
    }

    function generateOptions(options: any) {

        let out = [];
        for (let i = 0; i < options.length; ++i) {
            out.push(
                <option
                    key={options[i].placeName + 'dropdown'}
                    value={options[i].placeName}>{options[i].placeName + ', ' + options[i].address + ', ' + options[i].city}</option>
            );
        }
        return out;
    }

    function collectDataForRequest() {
        let name = '', address = '', city = '', mobile = false, donType = '', donAmount = 0, donDate = '',
            rem = true;
        let dropdown: any = document.getElementById('drop-down-points');
        let selected: string = dropdown ? dropdown['value'] : '';
        let instNameObj: any = document.getElementById('institution-name');
        if (instNameObj) {
            name = instNameObj.value ? instNameObj.value : selected;
        }
        let instName: string = instNameObj ? instNameObj.value : selected;

        if (instName !== selected) {
            let instAddrObj: any = document.getElementById('institution-address');
            if (instAddrObj) address = instAddrObj.value;
            let instCityObj: any = document.getElementById('institution-city');
            if (instCityObj) city = instCityObj.value;
            let instMobileObj: any = document.getElementById('is-new-loc-mobile-div');
            if (instMobileObj) {
                let radio: any = instMobileObj.getElementsByClassName('color-primary');
                if (radio) mobile = radio.length === 1;
            }
        }
        let donationTypeObj = document.getElementById('reg-what-donated-div');
        if (donationTypeObj) {
            let pickedObj = donationTypeObj.getElementsByClassName('color-primary');
            if (pickedObj.length === 1) {
                let donated = pickedObj[0].getElementsByTagName('input');
                if (donated.length === 1) {
                    donType = donated[0].value;
                }
            }
        }

        let donAmountObj: any = document.getElementById('reg-how-much');
        if (donAmountObj) donAmount = parseInt(donAmountObj.value);
        if (isNaN(donAmount)) donAmount = 0;

        let donDateObj: any = document.getElementById('reg-when');
        if (donDateObj) donDate = donDateObj.value;

        let reminderOjb: any = document.getElementById('remainder-div');
        if (reminderOjb) {
            let radio: any = reminderOjb.getElementsByClassName('color-primary');
            if (radio) rem = radio.length === 1;
        }

        let output = {
            "placeName": name,
            "address": address,
            "city": city,
            "isMobilePoint": mobile,
            "donationType": donType,
            "amount": donAmount,
            "time": donDate,
            'wantReminder': rem
        };

        let validationResult = validateRequestData(output);

        if (validationResult['ok']) {
            console.log('ok')
            return output;
        }
        alert(validationResult['error']);
    }

    function validateRequestData(collection: any) {
        if (collection['amount'] <= 0) {
            return {'ok': false, 'error': "Please provide positive donation amount"}
        }
        if (!['BLD', 'PLM', 'PLT', 'ERT', 'LEU'].includes(collection['donationType'])) {
            return {'ok': false, 'error': "Please pick donation type"}
        }
        if (!collection['time'].match(/^\d\d\d\d-\d\d-\d\d$/)) {
            return {'ok': false, 'error': "Please provide valid data format"}
        }
        return {'ok': true}
    }
}

export default RegisterDonation;
