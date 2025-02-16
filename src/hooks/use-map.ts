import { Location } from '../types';
import { useEffect, useState, useRef, MutableRefObject } from 'react';
import Leaflet, { Map } from 'leaflet';

const TILE_LAYER_URL_TEMPLATE = 'http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}' as const;


export default function useMap(containerRef: MutableRefObject<HTMLElement | null>, center: Location['coords'], zoom: number): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRendered = useRef<boolean>(false);

  useEffect(() => {
    if (map) {
      map.setView([center[0], center[1]], zoom);
    }
  }, [map, center, zoom]);

  useEffect(() => {
    if (containerRef.current !== null && !isRendered.current) {
      const instance = Leaflet.map(containerRef.current, {
        center: {
          lat: center[0],
          lng: center[1]
        },
        zoom: zoom
      });

      Leaflet.tileLayer(TILE_LAYER_URL_TEMPLATE).addTo(instance);

      setMap(instance);
      isRendered.current = true;
    }
  }, [containerRef, center, zoom]);

  return map;
}
