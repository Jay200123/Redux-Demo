// const redux = require("redux");

// const createStore = redux.createStore;

// const HELLO_MESSAGE = "HELLO_MESSAGE";
// const GOODBYE_MESSAGE = "GOODBYE_MESSAGE";

// function helloMessage() {
//   return {
//     type: HELLO_MESSAGE,
//   };
// }

// function goodbyeMessage() {
//   return {
//     type: GOODBYE_MESSAGE,
//   };
// }

// const initialState = {
//   message: "",
// };

// const reducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case HELLO_MESSAGE: {
//       return {
//         state: (state.message = "Hello World"),
//       };
//     }

//     case GOODBYE_MESSAGE: {
//       return {
//         state: (state.message = "Goodbye World"),
//       };
//     }
//   }
// };

// const store = createStore(reducer);

// // log the initial state of the store
// const unsubscribe = store.subscribe(()=> console.log("Updated State:", store.getState()));
// store.dispatch(helloMessage());
// store.dispatch(goodbyeMessage());
// unsubscribe();