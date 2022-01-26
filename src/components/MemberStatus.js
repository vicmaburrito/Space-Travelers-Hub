import React from 'react';
import PropTypes from 'prop-types';

function MemberStatus({ reserved }) {
  if (reserved === false) return <badge className="p-1 bg-secondary text-white rounded">NOT A MEMBER</badge>;
  return <badge className="p-1 bg-info text-white rounded">Active Member</badge>;
}

export default MemberStatus;

MemberStatus.propTypes = {
  reserved: PropTypes.bool,
};

MemberStatus.defaultProps = {
  reserved: false,
};
