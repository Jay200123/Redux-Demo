const redux = require("redux");
const produce = require("immer").produce;

const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

//actions
const ORDER_LUMPIA = "ORDER_LUMPIA";
const RESTOCK_LUMPIA = "RESTOCK_LUMPIA";

const UPDATE_USER = "UPDATE_USER";
const UPDATE_USER_STREET = "UPDATE_USER_STREET";

// action creators
function orderLumpia(quantity: number) {
  return {
    type: ORDER_LUMPIA,
    payload: quantity,
  };
}

function restockLumpia(quantity) {
  return {
    type: RESTOCK_LUMPIA,
    payload: quantity,
  };
}

function updateUser(city: string) {
  return {
    type: UPDATE_USER,
    payload: city,
  };
}

function updateUserStreet(street: string) {
  return {
    type: UPDATE_USER_STREET,
    payload: street,
  };
}

// initial state
const initialLumpiaState = {
  lumpiaCount: 10,
};

const initialUserState = {
  name: "John Doe",
  age: 23,
  address: {
    city: "Manila",
    street: "1234",
  },
};

type ACTION_TYPE = {
  type: string;
  payload: number;
};

type ACTION_TYPE_USER = {
  type: string;
  payload: string;
};

const lumpiaReducer = (state = initialLumpiaState, action: ACTION_TYPE) => {
  switch (action.type) {
    case ORDER_LUMPIA:
      return {
        ...state,
        lumpiaCount: state.lumpiaCount - action.payload,
      };
    case RESTOCK_LUMPIA:
      return {
        ...state,
        lumpiaCount: state.lumpiaCount + action.payload,
      };
    default:
      return state;
  }
};

const userReducer = (state = initialUserState, action: ACTION_TYPE_USER) => {
  switch (action.type) {
    case UPDATE_USER:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     city: action.payload,
      //   },
      // };

      // use of immer
      return produce(state, (draft: any) => {
        draft.address.city = action.payload;
      });
    case UPDATE_USER_STREET:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  lumpia: lumpiaReducer,
  user: userReducer,
});

const store = redux.createStore(rootReducers);

console.log("Initial State:", store.getState());

const actions = bindActionCreators(
  { orderLumpia, restockLumpia, updateUser, updateUserStreet },
  store.dispatch
);

const unsubscribe = store.subscribe(() =>
  console.log("Updated State: ", store.getState())
);

actions.orderLumpia(2);
actions.orderLumpia(3);
actions.restockLumpia(10);
actions.updateUser("Taguig");
actions.updateUserStreet("Arago Street");
