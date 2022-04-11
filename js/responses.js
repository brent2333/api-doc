import loginAuthPost from './login/user/loginAuthPost.js';
import loginFactors from './login/user/loginFactors.js';
import loginUser from './login/user/loginUser.js';
import loginMFA from './login/user/loginMFA.js';
import loginVerify from './login/user/loginVerify.js';
import loginOkta from './login/user/loginOkta.js';
import loginToken from './login/user/loginToken.js';
import loginRetrieve from './login/user/loginRetrieve.js';

import homeMe from './home/homeMe.js';
import homeTransactions from './home/homeTransactions.js';
import homeRewards from './home/homeRewards.js';
import homeCards from './home/homeCards.js';
import homeServices from './home/homeServices.js';
import dashboardUI from './home/ui/dashboardUI.js';
import homeNotifications from './home/homeNotifications.js';

import cardsMe from './cards/cardsMe.js';
import cardsUserCards from './cards/user/cardsUserCards.js';
import cardsDepartments from './cards/cardsDepartments.js';
import cardsCards from './cards/cardsCards.js';
import cardsBlockreasons from './cards/cardsBlockreasons.js';
import cardsDashboard from './cards/cardsDashboard.js';
import cardsTransactions from './cards/cardsTransactions.js';

import cardsOrderMe from './cardsOrder/cardsOrderMe.js';
import cardsOrderCard from './cardsOrder/user/cardsOrderCard.js';
import cardsOrderDepartments from './cardsOrder/cardsOrderDepartments.js';
import cardsOrderVelocityProfiles from './cardsOrder/cardsOrderVelocityProfiles.js';
import cardsOrderAllowedFuels from './cardsOrder/cardsOrderAllowedFuels.js';
import cardsOrderServices from './cardsOrder/cardsOrderServices.js';
import cardsOrderPromptedIdTypes from './cardsOrder/cardsOrderPromptedIdTypes.js';
import cardsOrderCardNewProfile from './cardsOrder/user/cardsOrderCardNewProfile.js';
import cardsOrderUI from './cardsOrder/ui/cardsOrderUI.js';

import cardsProfilesMe from './cardsProfiles/cardsProfilesMe.js';
import cardsProfilesEdit from './cardsProfiles/user/cardsProfilesEdit.js';
import cardsProfilesVelocityProfiles from './cardsProfiles/cardsProfilesVelocityProfiles.js';
import cardsProfilesServices from  './cardsProfiles/cardsProfilesServices.js';
import cardsProfilesDashboard from './cardsProfiles/cardsProfilesDashboard.js';
import cardsProfilesRewards from './cardsProfiles/cardsProfilesRewards.js';

import cardsPromptedIdsMe from  './cardsPromptedIds/cardsPromptedIdsMe.js';
import cardsPromptedIdsToggle from './cardsPromptedIds/user/cardsPromptedIdsToggle.js';
import cardsPromptedIdsDepartments from './cardsPromptedIds/cardsPromptedIdsDepartments.js';
import cardsPromptedIdsCards from './cardsPromptedIds/cardsPromptedIdsCards.js';
import cardsPromptedIdsRewards from './cardsPromptedIds/cardsPromptedIdsRewards.js';
import cardsPromptedIdsServices from './cardsPromptedIds/cardsPromptedIdsServices.js';

import activityMe from './activity/activityMe.js';
import activityTransactions from  './activity/activityTransactions.js';
import activityRewards from './activity/activityRewards.js';
import activityDashboard from './activity/activityDashboard.js';
import activityServices from './activity/activityServices.js';
import activityAllPayments from './activityHistory/activityAllPayments.js';

import payDashboard from './pay/payDashboard.js';
import payRewards from  './pay/payRewards.js';

import reportsRebateReportsTypes from './reports/reportsRebateReportsTypes.js';
import reportsRebateReports from './reports/reportsRebateReports.js';
import reportsStatements from './reports/reportsStatements.js';
import reportsUserOptionalReportsPurchaseSummary from './reports/user/reportsUserOptionalReportsPurchaseSummary.js';

import settingsExceptionSubscriptions from './settings/settingsExceptionSubscriptions.js';
import settingsUsers from './settings/settingsUsers.js';
import settingsCards from './settings/settingsCards.js';
import settingsAllDepartments from  './settings/settingsAllDepartments.js';

const responses = {
    loginFactors: loginFactors,
    loginAuthPost: loginAuthPost,
    loginUser: loginUser,
    loginMFA: loginMFA,
    loginVerify: loginVerify,
    loginOkta: loginOkta,
    loginToken: loginToken,
    loginRetrieve: loginRetrieve,
    homeMe: homeMe,
    homeTransactions: homeTransactions,
    homeRewards: homeRewards,
    homeCards: homeCards,
    homeServices: homeServices,
    homeNotifications: homeNotifications,
    dashboardUI: dashboardUI,
    activityMe: activityMe,
    cardsMe: cardsMe,
    cardsUserCards: cardsUserCards,
    cardsDepartments: cardsDepartments,
    cardsCards: cardsCards,
    cardsBlockreasons: cardsBlockreasons,
    cardsDashboard: cardsDashboard,
    cardsTransactions: cardsTransactions,
    cardsOrderMe: cardsOrderMe,
    cardsOrderCard: cardsOrderCard,
    cardsOrderDepartments: cardsOrderDepartments,
    cardsOrderVelocityProfiles: cardsOrderVelocityProfiles,
    cardsOrderAllowedFuels: cardsOrderAllowedFuels,
    cardsOrderServices: cardsOrderServices,
    cardsOrderPromptedIdTypes: cardsOrderPromptedIdTypes,
    cardsOrderCardNewProfile: cardsOrderCardNewProfile,
    cardsOrderUI: cardsOrderUI,
    cardsProfilesMe: cardsProfilesMe,
    cardsProfilesEdit: cardsProfilesEdit,
    cardsProfilesVelocityProfiles: cardsProfilesVelocityProfiles,
    cardsProfilesServices: cardsProfilesServices,
    cardsProfilesDashboard: cardsProfilesDashboard,
    cardsProfilesRewards: cardsProfilesRewards,
    cardsPromptedIdsMe: cardsPromptedIdsMe,
    cardsPromptedIdsToggle: cardsPromptedIdsToggle,
    cardsPromptedIdsDepartments: cardsPromptedIdsDepartments,
    cardsPromptedIdsCards: cardsPromptedIdsCards,
    cardsPromptedIdsRewards: cardsPromptedIdsRewards,
    cardsPromptedIdsServices: cardsPromptedIdsServices,
    activityTransactions: activityTransactions,
    activityRewards: activityRewards,
    activityDashboard: activityDashboard,
    activityServices: activityServices,
    activityAllPayments: activityAllPayments,
    payDashboard: payDashboard,
    payRewards: payRewards,
    reportsRebateReportsTypes: reportsRebateReportsTypes,
    reportsRebateReports: reportsRebateReports,
    reportsUserOptionalReportsPurchaseSummary: reportsUserOptionalReportsPurchaseSummary,
    reportsStatements: reportsStatements,
    settingsExceptionSubscriptions: settingsExceptionSubscriptions,
    settingsUsers: settingsUsers,
    settingsCards: settingsCards,
    settingsAllDepartments: settingsAllDepartments
}
export {responses};