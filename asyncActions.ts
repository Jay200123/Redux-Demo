// const redux = require("redux");
// const createStore = redux.createStore;
// const thunkMiddleware = require("redux-thunk").default;
// const applyMiddleware = redux.applyMiddleware;
// const axios = require("axios");

// const initialState = {
//   loading: false,
//   users: [],
//   error: "",
// };

// const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
// const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
// const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// const fetchUsersRequest = () => {
//   return {
//     type: FETCH_USERS_REQUEST,
//   };
// };

// const fetchUsersSuccess = (users: any) => {
//   return {
//     type: FETCH_USERS_SUCCESS,
//     payload: users,
//   };
// };

// const fetchUsersFailed = (error: any) => {
//   return {
//     type: FETCH_USERS_FAILURE,
//     payload: error,
//   };
// };

// const userReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case FETCH_USERS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_USERS_SUCCESS:
//       return {
//         ...state,
//         loading: true,
//         users: action.payload,
//         error: "",
//       };
//     case FETCH_USERS_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         users: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const getAllUsers = () => {
//   return function (dispatch: any) {
//     dispatch(fetchUsersRequest());
//     axios
//       .get("localhost:4000/api/v1/accessories")
//       .then((res: any) => {
//         const users = res.data.details;
//         dispatch(fetchUsersSuccess(users));
//       })
//       .catch((error: any) => {
//         dispatch(fetchUsersFailed(error.message));
//       });
//   };
// };

// const store = createStore(userReducer, applyMiddleware(thunkMiddleware));
// store.subscribe(() => {
//   console.log(store.getState());
// });
