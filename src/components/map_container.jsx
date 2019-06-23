import React from "react"
import Geosuggest from 'react-geosuggest';
import LeafletMap from "./leaflet_map.jsx";
import '../css/geosuggest.css'
import '../css/leaflet_map.css'

class MapContainer extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            location: {
                lat : 25.0329694,
                lng: 121.56541770000001,
            }
        };
        this.onSuggestSelect = this.onSuggestSelect.bind(this)
    }
    
    onSuggestSelect(suggest) {
   
      let location = suggest.location;
      if (location)
        this.setState({location});
    }
    
    render() {
      return (
        <div>
          <div>
            <LeafletMap
                location={this.state.location}
            />
          </div>
          <div>
            <Geosuggest
                placeholder="Searching Location"
                onSuggestSelect={this.onSuggestSelect}
                location={new google.maps.LatLng(53.558572, 9.9278215)}
                radius="20" 
            />
          </div>
        </div>
      )
    }
  }

  export default MapContainer;