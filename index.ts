// const redux = require("redux");
// const produce = require("immer").produce; //immutable state management

// const createStore = redux.createStore;
// const bindActionCreators = redux.bindActionCreators;
// const combineReducers = redux.combineReducers;


// const CAKE_OREDERED = "CAKE_ORDERED";
// const RESTOCK_CAKE = "RESTOCK_CAKE";
// const ICECREAM_ORDERED = "ICECREAM_ORDERED";
// const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";
// const INCREMENT_NUMBER = "INCREMENT_NUMBER";
// const DECREMENT_NUMBER = "DECREMENT_NUMBER";
// const UPDATE_USER = "UPDATE_USER";  

// //orderCake is an action creator that returns an action
// function orderCake() {
//   //action
//   return {
//     type: CAKE_OREDERED,
//     payload: 1,
//   };
// }

// function restockCake(quantity: number) {
//   return {
//     type: RESTOCK_CAKE,
//     payload: quantity,
//   };
// }

// function orderIceCream() {
//   return {
//     type: ICECREAM_ORDERED,
//     payload: 1,
//   };
// }

// function restockIceCream(quantity: number) {
//   return {
//     type: RESTOCK_ICECREAM,
//     payload: quantity,
//   };
// }

// function incrementNumber() {
//   return {
//     type: INCREMENT_NUMBER,
//     payload: 1,
//   };
// }

// function decrementNumber() {
//   return {
//     type: DECREMENT_NUMBER,
//     payload: 1,
//   };
// }

// function updateUser(){
//   return {
//     type: UPDATE_USER,
//   }
// }

// //current state of the application  is 10
// const initialCakeState = {
//   numberOfCakes: 10,
// };

// const initialIceCreamState = {
//   numbersOfIceCream: 20,
// };

// const initialNumberState = {
//   number: 0,
// };

// const initialUserState = {
//   user: {
//     name: "John",
//     age: 25,
//     address:{
//       city: "New York",
//       country: "USA"
//     }
//   },
// }

// //reducer function that takes the current state and action as arguments and returns the new state
// const cakeReducer = (state = initialCakeState, action: any) => {
//   switch (action.type) {
//     case CAKE_OREDERED:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - action.payload,
//       };

//     default:
//       return state;
//   }
// };

// const iceCreamReducers = (state = initialIceCreamState, action: any) => {
//   switch (action.type) {
//     case ICECREAM_ORDERED:
//       return {
//         ...state,
//         numbersOfIceCream: state.numbersOfIceCream - action.payload,
//       };
//     case RESTOCK_ICECREAM:
//       return {
//         ...state,
//         numbersOfIceCream: state.numbersOfIceCream + action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const numberReducers = (state = initialNumberState, action: any) => {
//   switch (action.type) {
//     case INCREMENT_NUMBER:
//       return {
//         ...state,
//         number: state.number + action.payload,
//       };
//     case DECREMENT_NUMBER:
//       return {
//         ...state,
//         number: state.number - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const userReducer = (state = initialUserState, action: any)=>{
//   switch(action.type){
//     case UPDATE_USER:
//       return produce(state, (d)=>{
//         d.user.name = "Jane";
//         d.user.address.city = "San Francisco";	
//       })
//       default:
//         return state;
//   }
// }

// //accepts reducer as an argument and returns a store
// const rootReducer = combineReducers({
//   cake: cakeReducer,
//   iceCream: iceCreamReducers,
//   counter: numberReducers, 
//   user: userReducer
// });
// const store = createStore(rootReducer);

// //log the initial state of the store
// console.log("Initial State:", store.getState());

// //subscribe to the store to listen to the state changes
// const unsubscribe = store.subscribe(() =>
//   console.log("Updated State:", store.getState())
// );
// const actions = bindActionCreators(
//   { orderCake, restockCake, orderIceCream, incrementNumber, decrementNumber, updateUser  },
//   store.dispatch
// );

// actions.orderCake();
// actions.orderCake();
// actions.orderCake();

// actions.restockCake(10);

// actions.orderIceCream();
// actions.orderIceCream();
// actions.orderIceCream();

// actions.incrementNumber();
// actions.incrementNumber();
// actions.decrementNumber();
// actions.decrementNumber();

// actions.updateUser();

// // //dispatch an action to update the state
// // store.dispatch(orderCake());
// // store.dispatch(orderCake());
// // store.dispatch(orderCake());
// // store.dispatch(orderCake());
// // store.dispatch(restockCake(10));

// //unsubscribe to the store
// unsubscribe();
// // store.dispatch(orderCake());
// // store.dispatch(orderCake());
// // store.dispatch(orderCake());
