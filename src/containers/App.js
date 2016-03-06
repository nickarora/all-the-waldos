import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import WaldoMap from '../components/WaldoMap';
import MapNav from '../components/MapNav';

import { navToNextMap } from '../actions/actions';

class App extends Component {
  render = () =>
    <div>
      <WaldoMap
        mapName={this.props.mapName}
        mapWidth={this.props.mapWidth}
        mapHeight={this.props.mapHeight}
      />
      <MapNav onClick={this.props.navToNextMap} />
    </div>;
}

App.propTypes = {
  mapName: PropTypes.string.isRequired,
  mapWidth: PropTypes.string.isRequired,
  mapHeight: PropTypes.string.isRequired,
  navToNextMap: PropTypes.func.isRequired
};

const mapStateToProps = ({ maps, currentMap }) => ({
  mapName: maps[currentMap].mapName,
  mapWidth: maps[currentMap].mapWidth.toString(),
  mapHeight: maps[currentMap].mapHeight.toString()
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ navToNextMap }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
