import React from "react"
import Geosuggest from 'react-geosuggest';

import LeafletMap from "./leaflet_map.jsx";
import DropDown from "./dropdown.jsx";
import '../css/geosuggest.css'
import '../css/leaflet_map.css'

class MapContainer extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            displayhours: '0',
            coordinates : [],
            markers : [],
        };
        this.onSuggestSelect = this.onSuggestSelect.bind(this);
        this.onDropDownChanged = this.onDropDownChanged.bind(this);
    }

    onSuggestSelect(suggest) {
   
      let location = suggest.location;
      if (location) {
        if ( this.state.displayhours == 0 )
          this.setState({markers: [...[location]]});
        else
          this.setState({markers: [...[location], ...this.state.markers]});
        let coordinates = location;
        coordinates.time = Date.now();
        this.setState({coordinates: [...[coordinates], ...this.state.coordinates]});
      }
    }
    
    onDropDownChanged(event) {
      let displayhours = event.target.value;
      let markers = this.state.coordinates
      .filter( element => ((Date.now()-element.time)/(60*60*1000)) < displayhours)
      .map(element => {
        let obj = Object.assign({},element);
        delete obj.time;
        return obj;
      });
      this.setState({displayhours});
      this.setState({markers});
    }

    render() {
      return (
        <div>
          <div>
            <LeafletMap
                markers={this.state.markers}
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
          <p>
            Display coordinates in the past <DropDown onDropDownChanged={this.onDropDownChanged} /> hours.
          </p>
        </div>
      )
    }
  }

  export default MapContainer;