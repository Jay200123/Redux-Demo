// const counterRedux = require("redux");

// const createCounterStore = counterRedux.createStore;

// const INCREMENT_NUMBER = "INCREMENT_NUMBER";
// const DECREMENT_NUMBER = "DECREMENT_NUMBER";

// //action creators
// // returns an plain action object
// function incrementNumber() {
//   return {
//     type: INCREMENT_NUMBER,
//   };
// }

// function decrementNumber() {
//   return {
//     type: DECREMENT_NUMBER,
//   };
// }

// const initialCounter = {
//   number: 0,
// };

// const counterReducer = (state = initialCounter, action: any) => {
//   switch (action.type) {
//     case INCREMENT_NUMBER:
//       return {
//         ...state,
//         number: state.number + 1,
//       };
//     case DECREMENT_NUMBER:
//       return {
//         ...state,
//         number: state.number - 1,
//       };
//   }
// };

// const counterStore = createCounterStore(counterReducer);

// console.log("Initial Counter state:", counterStore.getState());

// const unsubscribeCounter = counterStore.subscribe(() =>
//   console.log("Updated Counter State:", counterStore.getState())
// );

// counterStore.dispatch(incrementNumber());
// counterStore.dispatch(incrementNumber());
// counterStore.dispatch(incrementNumber());
// counterStore.dispatch(decrementNumber());