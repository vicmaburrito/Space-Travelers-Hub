import axios from 'axios';

const FETCH_MISSIONS = 'Space-Travelers-Hub/missions/FETCH_MISSIONS';
const JOIN_MISSION = 'Space-Travelers-Hub/missions/JOIN_MISSION';

// ACTIONS

export const fetchMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
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
    case JOIN_MISSION:
      const newMission = state.map((mission) => { /*eslint-disable-line*/
        if (mission.id !== action.payload) return mission;
        console.log({ ...mission, reserved: true });
        return { ...mission, reserved: true };
      });
      return newMission;
    default:
      return missionsList;
  }
};

export default missionsReducer;
