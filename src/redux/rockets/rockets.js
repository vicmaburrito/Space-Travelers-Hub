import URL from './API';

const GET_ROCKETS = 'GET_ROCKETS';
const SHOW_ROCKET = 'SHOW_ROCKET';

const initialState = { rockets: [] };

export const getRockets = () => (dispatch) => {
  dispatch({ type: GET_ROCKETS });

  const fetchRockets = async () => {
    try {
      const fetching = await fetch(URL);
      const rockets = await fetching.json();
      const payload = rockets.map((rocket) => ({
        id: rocket.id,
        name: rocket.name,
        type: rocket.type,
        images: rocket.flickr_images,
      }));
      dispatch({ type: SHOW_ROCKET, payload });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  fetchRockets();
};

export const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, action.payload];
    case SHOW_ROCKET:
      return { ...state, rockets: action.payload };
    default:
      return state;
  }
};
