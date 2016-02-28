import React, { Component, PropTypes } from 'react';


class WorldMap extends Component {
  componentDidUpdate = () => {
    const openseadragon = require('openseadragon');

    openseadragon({
      id: 'waldo-map',
      prefixUrl: 'http://openseadragon.github.io/openseadragon/images/',
      tileSources: {
        type: 'image',
        url: this.props.mapName
      }
    });
  };

  render = () => (
    <div id="waldo-map" className="waldo-map" />
  );
}

WorldMap.propTypes = {
  mapName: PropTypes.string.isRequired
};

export default WorldMap;
