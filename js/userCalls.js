const userCalls = {
    login: `<div>
    <ul>
    <li onClick="showUserResp('loginAuthPost'); return false;">
    amazonaws.com/qa/okta/authenticate
    </li>
    <li onClick="showUserResp('loginFactors'); return false;">
    amazonaws.com/qa/okta/users/00u1hvl3evLlbATNB0x7/factors
    </li>
    <li onClick="showUserResp('loginUser'); return false;">
    amazonaws.com/qa/okta/users/00u1hvl3evLlbATNB0x7
    </li>
    <li onClick="showUserResp('loginMFA'); return false;">
    amazonaws.com/qa/okta/mfalogs/00u1hvl3evLlbATNB0x7/2022-04-10T22:47:04.511Z
    </li>
    <li onClick="showUserResp('loginVerify'); return false;">
    amazonaws.com/qa/okta/authn/factors/verify
    </li>
    <li onClick="showUserResp('loginOkta'); return false;">
    amazonaws.com/qa/okta/users=fmqaokta@mailinator.com
    </li>
    <li onClick="showUserResp('loginToken'); return false;">
    amazonaws.com/qa/token
    </li>
    <li onClick="showUserResp('loginRetrieve'); return false;">
    amazonaws.com/qa/ua/retrieve
    </li>
    </ul>
    </div>`,
    home: `no user initiated api calls`,
    activity: '',
    activityHistory: '',
    activitySavings: '',
    cards: `<div>
    <ul>
    <li onClick="showUserResp('cardsUserCards'); return false;">
    /cards/{id}
    </li>
    </ul>
    </div>`,
    cardsOrder: `<div>
    <ul>
    <li onClick="showUserResp('cardsOrderCard'); return false;">
    /cards
    </li>
    </ul>
    <li onClick="showUserResp('cardsOrderCardNewProfile'); return false;">
    /velocityprofiles/{int} **for new profile
    </li>
   
    </div>`,
    cardsProfiles: `<div>
    <ul>
    <li onClick="showUserResp('cardsProfilesEdit'); return false;">
    /velocityprofiles/{id}</li>
    <li>
    ** DELETE PROFILE?</li>
    </ul>
    </div>`,
    cardsPromptedids:  `<div>
    <ul>
    <li onClick="showUserResp('cardsPromptedIdsToggle'); return false;">
    /promptedids</li>
    <li>
    ** EDIT PROMPTED IDS?</li>
    </ul>
    </div>`,
    pay: '',
    reports: ``,
    reportsCreate: `<div>
    <ul>
    <li onClick="showUserResp('reportsUserOptionalReportsPurchaseSummary'); return false;">
    /OptionalReports/purchasesummary?fromDate&toDate&usePostedDate</li>
    </ul>
    </div>`,
    reportsDocuments:'',
    resetPassword: '',
    rewards: '',
    settings: '',
    settingsAccount: '',
    settingsManageUsers: '',
    settingsNotifications: '',
    supportContactUs: ''
}

export {userCalls};