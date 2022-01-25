const FETCH_ROCKETS = 'Space-Travelers-Hub/rockets/FETCH_ROCKETS';
const initialState = [];

export const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
};
