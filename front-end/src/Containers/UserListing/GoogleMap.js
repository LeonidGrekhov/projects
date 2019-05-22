import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderReady: false
    };
  }

  componentDidMount = () => {
    const initMapScript = document.createElement('script');
    initMapScript.type = 'text/javascript';
    initMapScript.async = true;
    initMapScript.innerHTML =
      'function initMap() {' +
      "new google.maps.Map(document.getElementById('map'), {" +
      'center: { lat: -34.397, lng: 150.644 },' +
      'zoom: 8' +
      '});' +
      '}';
    document.body.appendChild(initMapScript);
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCtVciksJFa09uouNEWwjwfh-x8efW_lko&callback=initMap';
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    document.body.appendChild(googleMapsScript);
  };

  render = () => <div id="map" style={{ height: '500px', width: '500px' }} />;
}

export default GoogleMap;
