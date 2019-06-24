import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class LeafletMap extends React.PureComponent {

    render() {
      const {markers} = this.props;
   
      return (
        <Map
          center={markers.length ? markers[0] : [25.0329694, 121.56541770000001]}
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
      
          {markers.map((position, idx) => 
            <Marker key={`marker-${idx}`} position={position}>
            </Marker>
          )}
        </Map>
      )
    }
}

export default LeafletMap