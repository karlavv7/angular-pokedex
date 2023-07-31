// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pokedexBaseUrl: 'https://pokeapi.co/api/v2',
  pokeStatisticsUrl: 'wss://pokemon-statistics-be19c4542f3c.herokuapp.com/',
  firebase: {
    apiKey: "AIzaSyCGHZ2bb801ld1V2nQmqOZ2ueXKx5J87as",
    authDomain: "pokemon-pokedex-7b7da.firebaseapp.com",
    projectId: "pokemon-pokedex-7b7da",
    storageBucket: "pokemon-pokedex-7b7da.appspot.com",
    messagingSenderId: "1066530652167",
    appId: "1:1066530652167:web:c33cb7e13a54b58fccaaa2",
    measurementId: "G-65S9XJC7X7"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
