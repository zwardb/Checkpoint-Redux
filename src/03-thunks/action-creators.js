import axios from "axios";

export const GOT_BALLOONS = "GOT_BALLOONS";
export const BALLOONS_ERROR = "BALLOONS_ERROR";

export function createGotBalloonsAction(balloons) {
  return { type: GOT_BALLOONS, balloons };
}

export function createBalloonsErrorAction(error) {
  return { type: BALLOONS_ERROR, error };
}

export function createGetBalloonsThunk() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/balloons')
      dispatch(createGotBalloonsAction(data));
    } catch (error) {
      dispatch(createBalloonsErrorAction(error));
    }
  }
}
