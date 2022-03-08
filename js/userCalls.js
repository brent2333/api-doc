const userCalls = {
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