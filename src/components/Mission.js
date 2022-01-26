import React from 'react';
import JoinButton from './JoinButton';

import './Missions.css';

const Mission = (mission) => {
  const element = mission.mission; /* eslint-disable-line */
  console.log(element);

  return (
    <tr className="body_row">
      <td className="p-2 border_right border-bottom bold">{element.name}</td>
      <td className="p-2 border_right border-bottom">{element.description}</td>
      <td className="p-2 border_right border-bottom text-center"><span>NOT A MEMBER</span></td>
      <td className="p-2 border-bottom text-center"><JoinButton reserved={element.reserved} id={element.id} /></td>
    </tr>
  );
};

export default Mission;
