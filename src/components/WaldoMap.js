import React, { Component, PropTypes } from 'react';
import { dzi } from '../../config/default.json';

class WaldoMap extends Component {
  componentDidMount = () => { this.loadMap(); };
  componentDidUpdate = () => { this.loadMap(); };

  loadMap = () => {
    const openseadragon = require('openseadragon');

    const currentWaldoMap = {
      Image: {
        xmlns: dzi.xmlns,
        Format: dzi.Format,
        Overlap: dzi.Overlap,
        TileSize: dzi.TileSize,
        Url: `${this.props.mapName}_files/`,
        Size: {
          Width: this.props.mapWidth,
          Height: this.props.mapHeight
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

  render = () => <div id="waldo-map" className="waldo-map"></div>;
}

WaldoMap.propTypes = {
  mapName: PropTypes.string.isRequired,
  mapWidth: PropTypes.string.isRequired,
  mapHeight: PropTypes.string.isRequired
};

export default WaldoMap;
