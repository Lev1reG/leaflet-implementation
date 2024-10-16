import './styles.css';
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import {
  Icon,
  divIcon
} from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

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
    },
    {
      geocode: [-7.769238735603154, 110.37824730267296],
      popup: 'Perpustakaan Universitas Gadjah Mada'
    },
    {
      geocode: [-7.773328942716819, 110.38001954158898],
      popup: 'Masjid Kampus UGM'
    },
    {
      geocode: [-7.771432729192478, 110.37750730545841],
      popup: 'Lapangan Pancasila UGM'
    }
  ]

  const customIcon = new Icon({
    iconUrl: '/pin.png',
    iconSize: [38, 38]
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
    })
  }

  return (
    <>
      <MapContainer
        center={position}
        zoom={17}
      >
        <TileLayer
          attribution='&copy; <a href="https://gamaforce.wg.ugm.ac.id/">GAMAFORCE UGM</a>'
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=r5rdGo7BGVTWa7OH6yMv"
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
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
        </MarkerClusterGroup>
      </MapContainer>
    </>
  )
}

export default App
