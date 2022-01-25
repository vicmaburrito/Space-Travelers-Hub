import URL from './API';

const GET_ROCKETS = 'GET_ROCKETS';
const SHOW_ROCKET = 'SHOW_ROCKET';
// const FETCH_ROCKETS = 'Space-Travelers-Hub/rockets/FETCH_ROCKETS';

export const getRockets = () => (dispatch) => {
  dispatch({ type: GET_ROCKETS });

  const fetchRockets = async () => {
    try {
      const fetching = await fetch(URL);
      const rockets = await fetching.json();
      const payload = rockets.map((rocket) => ({
        id: rocket.id,
        name: rocket.name,
        desc: rocket.description,
        images: rocket.flickr_images,
      }));
      dispatch({ type: SHOW_ROCKET, payload });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  fetchRockets();
};

export const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, action.payload];
    case SHOW_ROCKET:
      return {};
    default:
      return state;
  }
};
