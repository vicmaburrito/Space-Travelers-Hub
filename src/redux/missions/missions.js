import axios from 'axios';

const FETCH_MISSIONS = 'Space-Travelers-Hub/missions/FETCH_MISSIONS';

// ACTIONS

export const fetchMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const fetchMissionsFromAPI = () => (dispatch) => {
  axios.get('https://api.spacexdata.com/v3/missions')
    .then((response) => {
      dispatch(fetchMissions(response.data));
    });
};

// REDUCER

const missionsReducer = (state = [], action) => {
  const missionsList = [...state];
  switch (action.type) {
    case FETCH_MISSIONS:
      const missions = [...action.payload]; /*eslint-disable-line*/
      const filterMissions = missions.map((mission) => ({ /*eslint-disable-line*/
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      }));
      return [...missionsList, ...filterMissions];
    default:
      return missionsList;
  }
};

export default missionsReducer;
