// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  //endpoint: 'https://spartacus-sandbox.bloomreach.io/delivery/site/v1/channels/spartacus/pages',
  endpoint: 'http://localhost:8080/delivery/site/v1/channels/spartacus/pages',
  production: false,
  smEndPoint: 'https://core.dxpapi.com/api/v1/core/',
  smSuggestionEndPoint: 'https://suggest.dxpapi.com/api/',
  accountId: "6370",
  domainKey: "pacific_supply",
  authKey: "1vjobidilg5gcbpn",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
