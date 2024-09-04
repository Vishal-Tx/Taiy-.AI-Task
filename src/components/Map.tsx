import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { Icon } from "leaflet";

// Importing the custom styles for map
import "leaflet/dist/leaflet.css";

// Define a custom marker icon
const customMarkerIcon: Icon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

// Define the interface for country data
interface CountryData {
    country: string;
    countryInfo: {
        lat: number;
        long: number;
    };
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
}

interface MapProps {
    countryData: CountryData[];
}

const MapChart: React.FC<MapProps> = ({ countryData }) => {
    return (
        <div className="w-full h-[500px] mt-6">
            <span className="flex justify-center mb-2">COVID-19 Data By Country</span>
            <MapContainer center={[20, 0]} zoom={2} className="h-full w-full">
                {/* OpenStreetMap Tile Layer */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* showing Markers for each country */}
                {countryData.map((country) => (
                    <Marker
                        key={country.country}
                        position={[country.countryInfo.lat, country.countryInfo.long]}
                        icon={customMarkerIcon}
                    >
                        <Popup>
                            <div>
                                <h2 className="font-bold">{country.country}</h2>
                                <p>Active: {country.active.toLocaleString()}</p>
                                <p>Recovered: {country.recovered.toLocaleString()}</p>
                                <p>Deaths: {country.deaths.toLocaleString()}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapChart;
