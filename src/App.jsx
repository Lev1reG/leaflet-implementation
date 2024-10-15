import { Icon } from 'leaflet';
import './styles.css';
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';

function App() {
  const position = [-7.773782879038681, 110.37836455755829];

  const markers = [
    {
      geocode: [-7.773782879038681, 110.37836455755829],
      popup: 'GAMAFORCE UGM'
    },
    {
      geocode: [-7.770113921502923, 110.37789475890168],
      popup: 'Grha Sabha Prmana (GSP) UGM'
    }
  ]

  const customIcon = new Icon({
    iconUrl: '/pin.png',
    iconSize: [38, 38]
  });

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

        {
          markers.map((marker) => (
            <Marker
              position={marker.geocode}
              icon={customIcon}
            >
              <Popup>
                <h2>
                  {marker.popup}
                </h2>
              </Popup>
            </Marker>
          ))
        }
      </MapContainer>
    </>
  )
}

export default App
