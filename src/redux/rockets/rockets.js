const FETCH_ROCKETS = 'Space-Travelers-Hub/missions/FETCH_MISSIONS';
const initialState = [];

export const fetchRockets = (payload) => ({
   type: FETCH_MISSIONS,
   payload,
});

export const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
}
