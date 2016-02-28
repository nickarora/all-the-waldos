import React, { Component } from 'react';
//  import { bindActionCreators } from 'redux';
//  import { connect } from 'react-redux';

import WaldoMap from '../components/WaldoMap';

class App extends Component {
  render() {
    return (
      <div>
        <WaldoMap mapName="ww1.png" />
      </div>
    );
  }
}

//  const mapStateToProps = ({ todos, todoText }) => ({ todos, todoText });

//  const mapDispatchToProps = (dispatch) =>
//  bindActionCreators({ toggleTodo, addTodo, deleteTodo, inputChange }, dispatch);

//  export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
