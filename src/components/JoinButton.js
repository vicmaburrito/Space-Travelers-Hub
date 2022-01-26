import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

function JoinButton({ reserved, id }) {
  const dispatch = useDispatch();

  const dispatchJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const dispatchLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  if (reserved === true) {
    return (
      <button className="btn btn-outline-danger" type="button" onClick={() => dispatchLeaveMission(id)}>
        Leave Mission
      </button>
    );
  }

  return (
    <button className="btn btn-outline-secondary" type="button" onClick={() => dispatchJoinMission(id)}>
      Join Mission
    </button>
  );
}

export default JoinButton;

JoinButton.propTypes = {
  reserved: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

JoinButton.defaultProps = {
  reserved: false,
};
