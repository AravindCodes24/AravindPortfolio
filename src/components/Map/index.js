import "./index.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <div className="map-wrap">
      <MapContainer center={[12.93, 79.3339]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[12.9378672, 79.3345858]}>
          <Popup>
            <div className="info-map">
              Aravind,
              <br />
              Muthukadai,
              <br />
              TamilNadu, India
              <br />
              <span>Aravindratanm1996@gmail.com</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
