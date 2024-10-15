import './styles.css';
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer
} from 'react-leaflet';

function App() {
  const position = [-7.773782879038681, 110.37836455755829];

  return (
    <>
      <MapContainer
        center={position}
        zoom={17}
      >
        <TileLayer
          attribution='&copy; <a href="https://gamaforce.wg.ugm.ac.id/">GAMAFORCE UGM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  )
}

export default App
