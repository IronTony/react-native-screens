'use strict';
var React = require('react-native');
var {
  AppRegistry
} = React;

var DemoScreen = require('./app/screens/login/login1');

var react_native_screens = React.createClass({
  render: function() {
    return (
        <DemoScreen />
    );
  }
});


AppRegistry.registerComponent('react_native_screens', () => react_native_screens);
