const GET_ROCKETS = 'GET_ROCKETS';
const FETCH_ROCKETS = 'Space-Travelers-Hub/rockets/FETCH_ROCKETS';

export const getRockets = (dispatch) => {
  dispatch({ type: GET_ROCKETS });

  const fetchRockets = (payload) => ({
    type: FETCH_ROCKETS,
    payload,
  });
};

export const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
};
