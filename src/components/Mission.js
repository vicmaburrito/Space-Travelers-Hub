import React from 'react';

import './Missions.css';

const Mission = (mission) => {
  const element = mission.mission; /* eslint-disable-line */
  return (
    <tr className="body_row">
      <td className="p-2 border_right border-bottom bold">{element.name}</td>
      <td className="p-2 border_right border-bottom">{element.description}</td>
      <td className="p-2 border_right border-bottom text-center"><span>NOT A MEMBER</span></td>
      <td className="p-2 border-bottom text-center"><button className="rounded px-2" type="button">Join Mission</button></td>
    </tr>
  );
};

export default Mission;
