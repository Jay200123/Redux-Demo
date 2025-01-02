//const redux = require("redux");
// const bindActionCreators = redux.bindActionCreators;
// const bindReducers = redux.combineReducers;
// const createStore = redux.createStore;
// const produce = require("immer").produce; //immutable state management

// //action types
// const ORDER_LUMPIA = "ORDER_LUMPIA";
// const RESTOCK_LUMPIA = "RESTOCK_LUMPIA";
// const ORDER_PUTO = "ORDER_PUTO";
// const RESTOCK_PUTO = "  RESTOCK_PUTO";
// const UPDATE_USER_ADDRESS = "UPDATE_USER_ADDRESS";

// //action creators
// const orderLumpia = (quantity: number) => {
//   return {
//     type: ORDER_LUMPIA,
//     payload: quantity,
//   };
// };

// const restockLumpia = (quantity: number) => {
//   return {
//     type: RESTOCK_LUMPIA,
//     payload: quantity,
//   };
// };

// const orderPuto = (quantity: number) => {
//   return {
//     type: ORDER_PUTO,
//     payload: quantity,
//   };
// };

// const restockPuto = (quantity: number) => {
//   return {
//     type: RESTOCK_PUTO,
//     payload: quantity,
//   };
// };

// const updateUserAddress = (address: string) => {
//   return {
//     type: UPDATE_USER_ADDRESS,
//     payload: address,
//   };
// };

// const initialState = {
//   lumpiaQuantity: 10,
// };

// const initialPutoState = {
//   putoQuantity: 20,
// };

// const initialUserState = {
//   user: {
//     name: "John Doe",
//     age: 25,
//     address: {
//       street: "123 Main St",
//       city: "Quezon City",
//     },
//   },
// };

// type ActionType = {
//   type: string;
//   payload: number;
// };

// type UserActionType = {
//   type: string;
//   payload: string;
// };

// const lumpiaReducer = (state = initialState, action: ActionType) => {
//   switch (action.type) {
//     case ORDER_LUMPIA:
//       return {
//         ...state,
//         lumpiaQuantity: state.lumpiaQuantity - action.payload,
//       };

//     case RESTOCK_LUMPIA:
//       return {
//         ...state,
//         lumpiaQuantity: state.lumpiaQuantity + action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const putoReducer = (state = initialPutoState, action: ActionType) => {
//   switch (action.type) {
//     case ORDER_PUTO:
//       return {
//         ...state,
//         putoQuantity: state.putoQuantity - action.payload,
//       };
//     case RESTOCK_PUTO:
//       return {
//         ...state,
//         putoQuantity: state.putoQuantity + action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const userReducer = (state = initialUserState, action: UserActionType) => {
//   switch (action.type) {
//     case UPDATE_USER_ADDRESS:
//       return produce(state, (draftState: any) => {
//         draftState.user.address.city = action.payload;
//       });
//     default:
//       return state;
//   }
// };

// const rootReducers = bindReducers({
//   lumpia: lumpiaReducer,
//   puto: putoReducer,
//   user: userReducer,
// });

// const store = createStore(rootReducers);
// console.log("Current Lumpia Store:", store.getState());

// const unsubscribe = store.subscribe(() =>
//   console.log("Updated Lumpia Store:", store.getState())
// );

// const actions = bindActionCreators(
//   { orderLumpia, restockLumpia, orderPuto, restockPuto, updateUserAddress },
//   store.dispatch
// );
// // actions for lumpia
// actions.orderLumpia(2);
// actions.restockLumpia(10);

// //actions for puto
// actions.orderPuto(5);
// actions.restockPuto(10);

// actions.updateUserAddress("San Francisco");

// unsubscribe();
