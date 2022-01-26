import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';

import './Missions.css';

const Mission = (mission) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(joinMission(id));
  };

  const element = mission.mission; /* eslint-disable-line */

  return (
    <tr className="body_row">
      <td className="p-2 border_right border-bottom bold">{element.name}</td>
      <td className="p-2 border_right border-bottom">{element.description}</td>
      <td className="p-2 border_right border-bottom text-center"><span>NOT A MEMBER</span></td>
      <td className="p-2 border-bottom text-center"><button className="rounded px-2" type="button" onClick={() => handleClick(element.id)}>Join Mission</button></td>
    </tr>
  );
};

export default Mission;
