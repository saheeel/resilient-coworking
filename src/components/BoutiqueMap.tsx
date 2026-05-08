import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with React
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const customIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: #c15a39; width: 10px; height: 10px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
  iconSize: [10, 10],
  iconAnchor: [5, 5],
});

const activeIcon = new L.DivIcon({
  className: 'custom-div-icon-active',
  html: `<div class="pulsing-marker"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

const locations = [
  { name: "ETH & University of Zurich", pos: [47.3762, 8.5477] as [number, number] },
  { name: "Zurich Main Station", pos: [47.3779, 8.5402] as [number, number] },
  { name: "Paradeplatz", pos: [47.3698, 8.5389] as [number, number] },
  { name: "Bellevue", pos: [47.3670, 8.5451] as [number, number] },
  { name: "Stadelhofen station", pos: [47.3662, 8.5484] as [number, number] },
  { name: "Bürkliplatz", pos: [47.3665, 8.5412] as [number, number] },
  { name: "Opera", pos: [47.3653, 8.5474] as [number, number] },
  { name: "Resilient Coworking", pos: [47.3644, 8.5492] as [number, number], main: true },
];

export default function BoutiqueMap() {
  const [isSatellite, setIsSatellite] = useState(true);

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      position: 'relative', 
      borderRadius: '24px', 
      overflow: 'hidden',
      zIndex: 1 // Ensure it stays below navbar
    }}>
      <style>{`
        .pulsing-marker {
          width: 16px;
          height: 16px;
          background-color: #c15a39;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 10px rgba(193, 90, 57, 0.6);
          position: relative;
        }
        .pulsing-marker::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 50%;
          border: 2px solid #c15a39;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .leaflet-container {
          background: #1a1a1a;
          z-index: 1 !important;
        }
        /* Custom Tooltip Styling */
        .leaflet-tooltip-custom {
          background-color: rgba(255, 255, 255, 0.9) !important;
          backdrop-filter: blur(4px);
          border: none !important;
          border-radius: 6px !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15) !important;
          padding: 6px 12px !important;
          font-family: 'Inter', sans-serif !important;
          font-weight: 600 !important;
          font-size: 0.85rem !important;
          color: #1a1a1a !important;
        }
        .leaflet-tooltip-left::before, .leaflet-tooltip-right::before {
          display: none !important;
        }
        .leaflet-tooltip-custom-main {
          background-color: #c15a39 !important;
          color: white !important;
          font-size: 0.95rem !important;
          padding: 8px 16px !important;
          z-index: 1000 !important;
        }
        .map-mode-toggle {
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 1000;
          background: white;
          border: none;
          padding: 10px 16px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.8rem;
          color: #1a1a1a;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        .map-mode-toggle:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
      `}</style>

      <button 
        className="map-mode-toggle"
        onClick={() => setIsSatellite(!isSatellite)}
      >
        <span style={{ 
          width: '12px', 
          height: '12px', 
          borderRadius: '3px', 
          backgroundColor: isSatellite ? '#1a1a1a' : '#c15a39',
          border: '1px solid rgba(0,0,0,0.1)'
        }}></span>
        {isSatellite ? 'Switch to Map' : 'Switch to Satellite'}
      </button>

      <MapContainer 
        center={[47.3644, 8.5492]} 
        zoom={15} 
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={false}
        zoomControl={true}
        doubleClickZoom={true}
      >
        <TileLayer
          key={isSatellite ? 'satellite' : 'normal'}
          url={isSatellite 
            ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          }
          attribution={isSatellite ? '&copy; Esri' : '&copy; CartoDB'}
        />

        {locations.map((loc, idx) => (
          <Marker 
            key={idx} 
            position={loc.pos} 
            icon={loc.main ? activeIcon : customIcon}
          >
            <Tooltip 
              permanent 
              direction="right" 
              offset={[10, 0]}
              className={`leaflet-tooltip-custom ${loc.main ? 'leaflet-tooltip-custom-main' : ''}`}
            >
              {loc.name}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
