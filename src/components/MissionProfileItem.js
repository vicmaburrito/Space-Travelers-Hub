import React from 'react';
import './MyProfile/MyProfile.css';
import PropTypes from 'prop-types';

function MissionProfileItem({ name }) {
  return (
    <div>
      <li className="border-bottom padLeftBottom">{name}</li>
    </div>
  );
}

export default MissionProfileItem;

MissionProfileItem.propTypes = {
  name: PropTypes.string,
};

MissionProfileItem.defaultProps = {
  name: undefined,
};
