// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  name: 'Development',
  reliasAlertsApi: 'http://localhost:3000/api/v1/',
  firebaseConfig: {
    apiKey: "AIzaSyCiPaOM5Nr4B9ssl2I4I0VY1Ql_mAi5eTQ",
    authDomain: "relias-notifications-hack.firebaseapp.com",
    databaseURL: "https://relias-notifications-hack.firebaseio.com",
    projectId: "relias-notifications-hack",
    storageBucket: "relias-notifications-hack.appspot.com",
    messagingSenderId: "242528928798"
  }
};
