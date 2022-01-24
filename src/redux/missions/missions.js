const FETCH_MISSIONS = 'Space-Travelers-Hub/missions/FETCH_MISSIONS';

// ACTIONS

export const fetchMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

// REDUCER

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
