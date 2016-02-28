import React, { Component, PropTypes } from 'react';


class WaldoMap extends Component {
  componentDidUpdate = () => {
    const openseadragon = require('openseadragon');

    const currentWaldoMap = {
      Image: {
        xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
        Url: `${this.props.mapName}_files/`,
        Format: 'png',
        Overlap: '0',
        TileSize: '256',
        Size: {
          Width: '11200',
          Height: '7040'
        }
      }
    };

    openseadragon({
      id: 'waldo-map',
      prefixUrl: 'http://openseadragon.github.io/openseadragon/images/',
      tileSources: currentWaldoMap,
      defaultZoomLevel: 1,
      minZoomLevel: 1,
      visibilityRatio: 1,
      showNavigationControl: false
    });
  };

  render = () => (
    <div id="waldo-map" className="waldo-map" />
  );
}

WaldoMap.propTypes = {
  mapName: PropTypes.string.isRequired
};

export default WaldoMap;
