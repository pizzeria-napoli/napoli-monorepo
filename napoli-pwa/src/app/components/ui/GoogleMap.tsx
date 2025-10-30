// napoli-pwa/src/app/components/ui/GoogleMap.tsx

"use client";

import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import { BRAND_INFO } from "../../lib/branding";

export function MapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  // El centro del mapa se calcula para estar entre las dos unidades.
  const center = useMemo(() => ({ lat: -27.6391, lng: -48.5064 }), []);

  if (loadError) return <p>Erro ao carregar o mapa.</p>;
  if (!isLoaded) return <p>Carregando mapa...</p>;

  return (
    <GoogleMap
      mapContainerClassName="w-full h-full rounded-lg"
      center={center}
      zoom={12}
    >
      {BRAND_INFO.addresses.map((location) => (
        <MarkerF
          key={location.name}
          position={location.coords}
          title={location.name}
          onClick={() => {
            // Abre las direcciones de Google Maps en una nueva pestaña.
            const destination = `${location.coords.lat},${location.coords.lng}`;
            const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
            window.open(url, "_blank");
          }}
        />
      ))}
    </GoogleMap>
  );
}
