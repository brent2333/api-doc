const endpointsLoad = {
    home: `<div>
    <ul>
    <li onClick="showResp('homeMe'); return false;">
    /me
    </li>
    <li onClick="showResp('homeTransactions'); return false;">
    /transactions
    </li>
    <li onClick="showResp('homeRewards'); return false;">
    /rewards/{id}
    </li>
    <li onClick="showResp('homeCards'); return false;">
    /cards
    </li>
    <li onClick="showResp('homeServices'); return false;">
    /services
    </li>
    <li onClick="showResp('homeNotifications'); return false;">
    /notifications
    </li>
    </ul>
    </div>`,
    activity: `<div> <ul>
    <li onClick="showResp('activityMe'); return false;">
    /me
    </li>
    <li onClick="showResp('activityTransactions'); return false;">
    /transactions?fromDate&toDate&status&customerIds
    </li>
    <li onClick="showResp('activityRewards'); return false;">
    /rewards/{id}
    </li>
    <li onClick="showResp('activityDashboard'); return false;">
    /dashboard?fromDate&toDate&customerIds
    </li>
    <li onClick="showResp('activityServices'); return false;">
    /services
    </li>
    </ul></div>`,
    activityHistory: `<div> <ul>
    <li onClick="showResp('activityMe'); return false;">
    /me
    </li>
    <li onClick="showResp('activityAllPayments'); return false;">
    /allpayments
    </li>
    </ul></div>`,
    cards: `<div>
    <ul>
    <li onClick="showResp('cardsMe'); return false;">
    /me
    </li>
    <li onClick="showResp('cardsDepartments'); return false;">
    /departments
    </li>
    <li onClick="showResp('cardsCards'); return false;">
    /cards
    </li>
    <li onClick="showResp('cardsBlockreasons'); return false;">
    /blockreasons
    </li>
    <li onClick="showResp('cardsDashboard'); return false;">
    /dashboard?fromDate&toDate&customerIds
    </li>
    <li onClick="showResp('cardsTransactions'); return false;">
    /transactions
    </li>
    </ul>
    </div>`,
    cardsOrder: `<div>
    <ul>
    <li onClick="showResp('cardsOrderMe'); return false;">
    /me
    </li>
    <li onClick="showResp('cardsOrderDepartments'); return false;">
    /departments
    </li>
    <li onClick="showResp('cardsOrderVelocityProfiles'); return false;">
    /velocityprofiles
    </li>
    <li onClick="showResp('cardsOrderAllowedFuels'); return false;">
    /allowedFuels
    </li>
    <li onClick="showResp('cardsOrderServices'); return false;">
    /services
    </li>
    <li onClick="showResp('cardsOrderPromptedIdTypes'); return false;">
    /promptedIdTypes/{int}
    </li>
    <li onClick="showResp('homeRewards'); return false;">
    /rewards/{id}
    </li>
    </ul>
    </div>`,
    cardsProfiles: `<div>
    <ul>
    <li onClick="showResp('cardsProfilesMe'); return false;">
    /me
    </li>
    <li onClick="showResp('cardsProfilesVelocityProfiles'); return false;">
    /velocityprofiles
    </li>
    <li onClick="showResp('cardsProfilesServices'); return false;">
    /services
    </li>
    <li onClick="showResp('cardsProfilesDashboard'); return false;">
    /dashboard?dateEnd&dateStart
    </li>
    <li onClick="showResp('cardsProfilesRewards'); return false;">
    /rewards/{id}
    </li>
    </ul>
    </div>`,
    cardsPromptedids: `<div>
    <ul>
    <li onClick="showResp('cardsPromptedIdsMe'); return false;">
    /me
    </li>
    <li onClick="showResp('cardsPromptedIdsDepartments'); return false;">
    /departments
    </li>
    <li onClick="showResp('cardsPromptedIdsCards'); return false;">
    /cards?customerIds
    </li>
    <li onClick="showResp('cardsPromptedIdsRewards'); return false;">
    /rewards/{id}
    </li>
    <li onClick="showResp('cardsPromptedIdsServices'); return false;">
    /services
    </li>
    </ul></div>`,
    pay: `<div>
    <ul>
    <li onClick="showResp('cardsPromptedIdsMe'); return false;">
    /me
    </li>
    <li onClick="showResp('payDashboard'); return false;">
    /dashboard?fromDate&toDate&customerIds</li>
    <li onClick="showResp('payRewards'); return false;">
    /rewards/{id}
    </li>
    <li onClick="showResp('activityServices'); return false;">
    /services
    </li>
    </ul></div>`,
    reports: `<div>
    <ul>
    <li onClick="showResp('cardsPromptedIdsMe'); return false;">
    /me
    </li>
    <li onClick="showResp('reportsRebateReportsTypes'); return false;">
    /rebatereportstypes</li>
    <li onClick="showResp('reportsRebateReports'); return false;">
    rebatereports?fromDate=2022-02-05&toDate=2022-03-07
    </li>
    <li onClick="showResp('payRewards'); return false;">
    /rewards/{id}
    </li>
    <li onClick="showResp('activityServices'); return false;">
    /services
    </li>
    </ul></div>`,
    reportsCreate:  `<div>
    <ul>
    <li onClick="showResp('cardsPromptedIdsMe'); return false;">
    /me
    </li>
    <li onClick="showResp('payRewards'); return false;">
    /rewards/{id}
    </li>
    <li onClick="showResp('activityServices'); return false;">
    /services
    </li>
    </ul></div>`,
    reportsDocuments:`<div>
    <ul>
    <li onClick="showResp('reportsStatements'); return false;">
    /statements?fromDate&toDate
    </li>
    <li onClick="showResp('payRewards'); return false;">
    /rewards/{id}
    </li>
    <li onClick="showResp('activityServices'); return false;">
    /services
    </li>
    <li onClick="showResp('payDashboard'); return false;">
    /dashboard?fromDate&toDate&customerIds</li>
    <li onClick="showResp('cardsPromptedIdsMe'); return false;">
    /me
    </li>
    </ul></div>`,
    resetPassword: ``,
    rewards: ``,
    settings: `<div>
    <ul>
    <li onClick="showResp('cardsPromptedIdsMe'); return false;">
    /me
    </li>
    <li onClick="showResp('payDashboard'); return false;">
    /dashboard?fromDate&toDate&customerIds</li>
    <li onClick="showResp('settingsExceptionSubscriptions'); return false;">
    /exceptionsubscriptions
    </li>
    <li onClick="showResp('settingsUsers'); return false;">
    /users
    </li>
    </ul></div>`,
    settingsAccount: `<div>
    <ul>
    <li onClick="showResp('cardsPromptedIdsMe'); return false;">
    /me
    </li>
    <li onClick="showResp('payDashboard'); return false;">
    /dashboard?fromDate&toDate&customerIds</li>
    <li onClick="showResp('settingsExceptionSubscriptions'); return false;">
    /exceptionsubscriptions
    </li>
    <li onClick="showResp('settingsUsers'); return false;">
    /users
    </li>
    <li onClick="showResp('settingsCards'); return false;">
    /cards?customerIds
    </li>
    <li onClick="showResp('settingsAllDepartments'); return false;">
    /alldepartments
    </li>
    <li onClick="showResp('settingsExceptionSubscriptions'); return false;">
    /exceptionsubscriptions
    </li>
    <li onClick="showResp('settingsUsers'); return false;">
    /users
    </li>
    <li onClick="showResp('payRewards'); return false;">
    /rewards/{id}
    </li>
    <li onClick="showResp('activityServices'); return false;">
    /services
    </li>
    </ul></div>`,
    settingsManageUsers: ``,
    settingsNotifications: ``,
    supportContactUs: ``
};

export  {endpointsLoad};