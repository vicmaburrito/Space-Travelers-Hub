import React from 'react';
import { useSelector } from 'react-redux';
import MissionProfileItem from '../MissionProfileItem';
import './MyProfile.css';

function MyProfile() {
  const reservedRockets = useSelector(
    (state) => state.rocketReducer.rockets,
  ).filter((rocket) => rocket.reserved);

  const reservedMissions = useSelector(
    (state) => state.missions,
  ).filter((mission) => mission.reserved === true);

  return (
    <div className="d-flex justify-content-between align-items-start reserved-items mt-5">
      <div className="data-container">
        <h2>My Missions</h2>
        {reservedMissions.length ? (
          <ul className="data-list py-3 padLeft-0">
            <div className="data-list-container align-items-center">
              {reservedMissions.map((reserved) => (
                <MissionProfileItem key={reserved.id} name={reserved.name} />
              ))}
            </div>
          </ul>
        ) : (
          <ul className="data-list py-3 padLeft-0">
            <div className="data-list-container align-items-center">
              <li className="padLeftBottom">No reservations</li>
            </div>
          </ul>
        )}
      </div>
      <div className="data-container">
        <h2>My Rockets</h2>
        {reservedRockets.length ? (
          <ul className="data-list py-3 padLeft-0">
            {reservedRockets.map((rocket) => (
              <div className="data-list-container d-flex justify-content-start align-items-center" key={rocket.id}>
                <li className="border-bottom padLeftBottom">{rocket.name}</li>
              </div>
            ))}
          </ul>
        ) : (
          <ul className="data-list py-3 padLeft-0">
            <div className="data-list-container d-flex justify-content-start align-items-center">
              <li className="padLeftBottom">No reservations</li>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
