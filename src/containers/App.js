import React, { Component, PropTypes } from 'react';
//  import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import WaldoMap from '../components/WaldoMap';

class App extends Component {
  render = () =>
    <div>
      <WaldoMap
        mapName={this.props.mapName}
        mapWidth={this.props.mapWidth}
        mapHeight={this.props.mapHeight}
      />
    </div>;
}

App.propTypes = {
  mapName: PropTypes.string.isRequired,
  mapWidth: PropTypes.string.isRequired,
  mapHeight: PropTypes.string.isRequired
};

const mapStateToProps = ({ currentMap }) => ({
  mapName: currentMap.mapName,
  mapWidth: currentMap.mapWidth.toString(),
  mapHeight: currentMap.mapHeight.toString()
});

//  const mapDispatchToProps = (dispatch) =>
//  bindActionCreators({ toggleTodo, addTodo, deleteTodo, inputChange }, dispatch);

export default connect(mapStateToProps)(App);
