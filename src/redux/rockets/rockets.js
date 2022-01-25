import URL from './API';

const GET_ROCKETS = 'GET_ROCKETS';
const FETCH_ROCKETS = 'Space-Travelers-Hub/rockets/FETCH_ROCKETS';

export const getRockets = () => (dispatch) => {
  dispatch({ type: GET_ROCKETS });

  const fetchRockets = async () => {
    try {
      const fetching = await fetch(URL);
      const rockets = await fetching.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };
  fetchRockets();
};

export const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
};
