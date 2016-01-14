'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  MapView,
} = React;

var MapController = React.createClass({
  render: function() {
    return (
      <MapView
        showsUserLocation={true}
        style={styles.mapView}
      />
    );
  }
});

var styles = StyleSheet.create({
  mapView: {
    flex: 1,
    marginTop: 65,
  }
});

module.exports = MapController;
