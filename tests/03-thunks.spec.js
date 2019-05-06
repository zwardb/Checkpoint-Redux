/*
 * READ THIS FIRST
 *
 * This test file includes action creators, and a reducer for a small redux store.
 *
 * The default initial of the store is the following:
 *
 * {
 *   balloons: [],
 *   balloonsError: null
 * }
 *
 * Included in this file is a function named: `createGetBalloonsThunk`.
 *
 * This is for you to implement as a thunk creator.
 *
 * The object of this thunk is to issue a GET request to `/balloons` with the
 * axios library.
 *
 * There are two specs, one simulates a successful response that responds with
 * an array of balloons: `["red baloon", "yellow balloon", "green ballooon"]`
 *
 * The other spec simulates a failed response with a status code `400`.
 *
 * Write this thunk creator in a way that, upon success the list of balloons
 * is placed on state at the `balloons` key. And upon failure, places the error
 * object on state at the `balloonsError` key.
 *
 */
import { expect } from "chai";
import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";
import MockAxiosAdapter from "axios-mock-adapter";
import thunkMiddleware from "redux-thunk";

const GOT_BALLOONS = "GOT_BALLOONS";
const BALLOONS_ERROR = "BALLOONS_ERROR";

function createGotBaloonsAction(balloons) {
  return { type: GOT_BALLOONS, balloons };
}

function createBalloonsErrorAction(error) {
  return { type: BALLOONS_ERROR, error };
}

function createGetBalloonsThunk() {
  /* ============================== */
  /* ============================== */
  /* Write your thunk creator here. */
  /* ============================== */
  /* ============================== */
}

function balloonsReducer(balloons = [], action) {
  switch (action.type) {
    case GOT_BALLOONS:
      return action.balloons;
    default:
      return balloons;
  }
}

function balloonsErrorReducer(error = null, action) {
  switch (action.type) {
    case BALLOONS_ERROR:
      return action.error;
    default:
      return error;
  }
}

const combinedReducer = combineReducers({
  balloons: balloonsReducer,
  balloonsError: balloonsErrorReducer
});

let store;
let mockAxios;

describe("Thunks", () => {
  beforeEach(() => {
    mockAxios = new MockAxiosAdapter(axios);
    store = createStore(combinedReducer, applyMiddleware(thunkMiddleware));
  });

  afterEach(() => {
    mockAxios.restore();
  });

  describe("GET /balloons succeeds", () => {
    beforeEach(() => {
      mockAxios
        .onGet("/balloons")
        .reply(200, ["red balloon", "yellow balloon", "green balloon"]);
    });

    xit("sets the recieved balloons on state", async () => {
      await store.dispatch(createGetBalloonsThunk());
      const state = store.getState()
      expect(state.balloons).to.deep.equal([
        "red balloon",
        "yellow balloon",
        "green balloon"
      ]);
    });
  });

  describe("GET /balloons fails", () => {
    beforeEach(() => {
      mockAxios.onGet("/balloons").reply(404, "No balloons today!");
    });

    xit("sets the thrown error on state", async () => {
      await store.dispatch(createGetBalloonsThunk());
      const state = store.getState()
      expect(state.balloonsError.response.data).to.deep.equal(
        "No balloons today!"
      );
    });
  });
});
