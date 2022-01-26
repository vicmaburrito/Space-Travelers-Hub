import URL from './API';

const GET_ROCKETS = 'GET_ROCKETS';
const ROCKETS_SUCCESS = 'GET_ROCKETS_SUCCESS';
const ROCKETS_FAILED = 'GET_ROCKETS_FAILED';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_ROCKET_RESERVATION = 'CANCEL_ROCKET_RESERVATION';

const initialState = { rockets: [], loading: true, error: null };

export const reserveRocket = (id) => (dispatch) => {
  dispatch({ type: RESERVE_ROCKET, payload: id });
};

export const cancelReservation = (id) => (dispatch) => {
  dispatch({ type: CANCEL_ROCKET_RESERVATION, payload: id });
};

export const getRockets = () => (dispatch) => {
  dispatch({ type: GET_ROCKETS });

  const fetchRockets = async () => {
    try {
      const fetching = await fetch(URL);
      const rockets = await fetching.json();
      const payload = rockets.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        desc: rocket.description,
        images: rocket.flickr_images,
      }));
      dispatch({ type: ROCKETS_SUCCESS, payload });
    } catch (e) {
      dispatch({
        type: ROCKETS_FAILED,
        payload: 'error',
      });
    }
  };
  fetchRockets();
};

export const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return { ...state, loading: true };
    case ROCKETS_SUCCESS:
      return { ...state, loading: false, rockets: action.payload };
    case ROCKETS_FAILED:
      return { ...state, loading: false, error: action.payload };
    case RESERVE_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => (
          rocket.id === action.payload ? { ...rocket, reserved: true } : rocket
        )),
      };
    case CANCEL_ROCKET_RESERVATION:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => (
          rocket.id === action.payload ? { ...rocket, reserved: false } : rocket
        )),
      };
    default:
      return state;
  }
};
