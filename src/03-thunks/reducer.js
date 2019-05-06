import { combineReducers } from 'redux'

const GOT_BALLOONS = "GOT_BALLOONS";
const BALLOONS_ERROR = "BALLOONS_ERROR";

export function createGotBaloonsAction(balloons) {
  return { type: GOT_BALLOONS, balloons };
}

export function createBalloonsErrorAction(error) {
  return { type: BALLOONS_ERROR, error };
}

export function createGetBalloonsThunk() {
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

const combinedReducers = combineReducers({
  balloons: balloonsReducer,
  balloonsError: balloonsErrorReducer
});

export default combineReducers
