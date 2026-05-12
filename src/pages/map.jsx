import { MapContainer, TileLayer } from "react-leaflet";

function MapView() {
  return (
    <MapContainer
      center={[51.505, -0.09]} // latitude, longitude
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      
    </MapContainer>
  );
}

export default MapView;
