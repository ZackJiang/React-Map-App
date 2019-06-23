import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class LeafletMap extends React.PureComponent {

    render() {
      const { location } = this.props;
      const marker = [location.lat, location.lng]
  
      return (
        <Map
          center={marker}
          zoom={6}
          maxZoom={10}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={marker}>
          </Marker>
        </Map>
      )
    }
}
  export default LeafletMap