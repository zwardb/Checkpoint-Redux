/*
 * READ THIS FIRST
 *
 * This test file includes action creators, and a reducer for a small redux store.
 *
 * The default initial of the store is the following:
 *
 * {
 *   age: Number,
 *   cash: ,
 *   posessions, []
 * }
 *
 * Included in this file is a reducer named `originalReducer`. This code is
 * commented out, and represents legacy code to refactor. All these tests pass
 * with the `originalReducer` function.
 *
 * Also included in this file are the empty reducer functions named
 * `ageReducer`, `cashReducer`, and `possessionsReducer`. These are used as
 * reducer functions in a call to `combineReducers`
 *
 * The object of this test is to move the appropriate chunks of the
 * `originalReducer` into the individual reducers named above.
 *
 * You will have to subtly re-write the reducer code, as the original version
 * was returning an entire state object, and these new reducers are tightly
 * scoped to either the `age`, `cash`, or `possessions` slice of state.
 *
 */
import { expect } from "chai";
import { createStore, combineReducers } from "redux";

const RECEIVED_A_PAYCHECK = "RECEIVED_A_PAYCHECK";
const BOUGHT_AN_ITEM = "BOUGHT_AN_ITEM";
const HAD_A_BIRTHDAY = "HAD_A_BIRTHDAY";

function createReceivedAPaycheckAction(amountAfterTaxes) {
  return { type: RECEIVED_A_PAYCHECK, amountAfterTaxes };
}

function createBoughtAnItemAction(item, price) {
  return { type: BOUGHT_AN_ITEM, item, price };
}

function createHadABirthdayAction(age) {
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

let store;

beforeEach(() => {
  store = createStore(combinedReducers);
  // store = createStore(originalReducer, {
  //   age: 0,
  //   cash: 0,
  //   possessions: [],
  // })
});

describe("Combine Reducers", () => {
  xit("increments age when a person has a birthday", () => {
    store.dispatch(createHadABirthdayAction());
    store.dispatch(createHadABirthdayAction());
    store.dispatch(createHadABirthdayAction());

    expect(store.getState().age).to.equal(3);
  });

  xit("adds to cash when a person receives a paycheck", () => {
    store.dispatch(createReceivedAPaycheckAction(2300));
    store.dispatch(createReceivedAPaycheckAction(2300));

    expect(store.getState().cash).to.equal(4600);
  });

  xit("subtracts from cash when a person buys an item", () => {
    store.dispatch(createReceivedAPaycheckAction(1000));
    store.dispatch(createBoughtAnItemAction("A Cheap Boat", 500));

    expect(store.getState().cash).to.equal(500);
  });

  xit("lists new purchases after a person buys an item", () => {
    store.dispatch(createReceivedAPaycheckAction(1000000));
    store.dispatch(createBoughtAnItemAction("A Modest Boat", 45000));
    store.dispatch(createBoughtAnItemAction("A Modest Yacht", 450000));

    expect(store.getState().possessions).to.deep.equal([
      "A Modest Boat",
      "A Modest Yacht"
    ]);
  });
});
