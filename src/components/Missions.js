import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsFromAPI } from '../redux/missions/missions';
import Mission from './Mission';

import './Missions.css';

function Missions() {
  const missions = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) dispatch(fetchMissionsFromAPI());
  }, []);

  const content = missions.map((mission) => (
    <Mission mission={mission} key={mission.id} />
  ));

  return (
    <table className="border my-5">
      <thead>
        <tr>
          <th className="border_right border-bottom title p-2">Mission</th>
          <th className="border_right border-bottom description p-2">Description</th>
          <th className="border_right border-bottom p-2">Status</th>
          <th className="border-bottom"> </th>
        </tr>
      </thead>
      <tbody>
        {content}
      </tbody>
    </table>
  );
}

export default Missions;
