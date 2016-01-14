/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var MapController = require('./ui/common/MapController')

var Relay = React.createClass({
  render: function() {
    return (
      <MapController />
    );
  }
});

var styles = StyleSheet.create({});

AppRegistry.registerComponent('Relay', () => Relay);
