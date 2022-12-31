import { getAnalytics, Analytics, logEvent } from "firebase/analytics";

let analytics: Analytics;


export const initializeAnalytics = function () {
  analytics = getAnalytics()
  return analytics
}

export const sendLog = function (event: string) {
  logEvent(analytics, event);
}