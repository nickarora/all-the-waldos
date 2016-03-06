import React, { Component, PropTypes } from 'react';
import { dzi } from '../../config/default.json';

const currentWaldoMap = props => ({
  Image: {
    xmlns: dzi.xmlns,
    Format: dzi.Format,
    Overlap: dzi.Overlap,
    TileSize: dzi.TileSize,
    Url: `${props.mapName}_files/`,
    Size: {
      Width: props.mapWidth,
      Height: props.mapHeight
    }
  }
});

const loadViewer = (props) => {
  const openseadragon = require('openseadragon');
  return openseadragon({
    id: 'waldo-map',
    tileSources: currentWaldoMap(props),
    defaultZoomLevel: 1,
    minZoomLevel: 1,
    visibilityRatio: 1,
    showNavigationControl: false
  });
};

class WaldoMap extends Component {
  componentDidMount = () => this._viewer = loadViewer(this.props);
  shouldComponentUpdate = (nextProps) => nextProps.mapName !== this.props.mapName;
  componentDidUpdate = () => this._viewer.open(currentWaldoMap(this.props));

  render = () => <div id="waldo-map" className="waldo-map"></div>;
}

WaldoMap.propTypes = {
  mapName: PropTypes.string.isRequired,
  mapWidth: PropTypes.string.isRequired,
  mapHeight: PropTypes.string.isRequired
};

export default WaldoMap;
