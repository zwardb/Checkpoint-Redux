import { createStore, combineReducers } from "redux";

export const RECEIVED_A_PAYCHECK = "RECEIVED_A_PAYCHECK";
export const BOUGHT_AN_ITEM = "BOUGHT_AN_ITEM";
export const HAD_A_BIRTHDAY = "HAD_A_BIRTHDAY";

export function createReceivedAPaycheckAction(amountAfterTaxes) {
  return { type: RECEIVED_A_PAYCHECK, amountAfterTaxes };
}

export function createBoughtAnItemAction(item, price) {
  return { type: BOUGHT_AN_ITEM, item, price };
}

export function createHadABirthdayAction(age) {
  return { type: HAD_A_BIRTHDAY, age };
}

//function originalReducer (priorState={}, action) {
//  switch (action.type) {
//    case RECEIVED_A_PAYCHECK:
//      return {
//        ...priorState,
//        cash: priorState.cash + action.amountAfterTaxes,
//      }
//    case HAD_A_BIRTHDAY:
//      return {
//        ...priorState,
//        age: priorState.age + 1
//      }
//    case BOUGHT_AN_ITEM:
//      return {
//        ...priorState,
//        cash: priorState.cash - action.price,
//        possessions: [...priorState.possessions, action.item]
//      }
//    default:
//      return priorState
//  }
//}

function ageReducer(age = 0, action) {
  switch (action.type) {
    default:
      return age;
  }
}

function possessionsReducer(possessions = [], action) {
  switch (action.type) {
    default:
      return possessions;
  }
}

function cashReducer(cash = 0, action) {
  switch (action.type) {
    default:
      return cash;
  }
}

const combinedReducers = combineReducers({
  age: ageReducer,
  possessions: possessionsReducer,
  cash: cashReducer
});

export default combineReducers
