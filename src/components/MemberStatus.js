import React from 'react';
import PropTypes from 'prop-types';

function MemberStatus({ reserved }) {
  if (reserved === false) return <span className="p-1 bg-secondary text-white rounded">NOT A MEMBER</span>;
  return <span className="p-1 bg-info text-white rounded">Active Member</span>;
}

export default MemberStatus;

MemberStatus.propTypes = {
  reserved: PropTypes.bool,
};

MemberStatus.defaultProps = {
  reserved: false,
};
