import React, { PropTypes } from 'react';

const handleClick = props =>
  e => {
    e.preventDefault();
    props.onClick();
  };

const MapNav = props =>
  <button
    className="mapnav"
    onClick={handleClick(props)}
  >
    Next Map
  </button>;

MapNav.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default MapNav;
