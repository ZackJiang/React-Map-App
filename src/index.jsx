import React from "react";
import ReactDOM from "react-dom";

import MapContainer from "./components/map_container.jsx";

const App = () => {
    return <MapContainer />
};

ReactDOM.render(<App />, document.querySelector("#root"));