import { Reservation } from '../../types';
import { ContactCoordinates, Zoom, defaultCustomIcon, selectedCustomIcon } from './const';
import { useState, useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import Leaflet from 'leaflet';
import classNames from 'classnames';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  reservations?: Reservation[];
}


export default function Map({ reservations }: MapProps): JSX.Element {
  const center = reservations ? reservations[0].location.coords : ContactCoordinates.coords;
  const zoom = reservations ? Zoom.Reservation : Zoom.Contact;
  const [selectedMarker, setSelectedMarker] = useState<string>('');
  const containerRef = useRef(null);
  const map = useMap(containerRef, center, zoom);


  useEffect(() => {
    if (!map) {
      return;
    }
    const markerLayer = Leaflet.layerGroup().addTo(map);

    if (!reservations) {
      Leaflet
        .marker({
          lat: ContactCoordinates.coords[0],
          lng: ContactCoordinates.coords[1],
        })
        .setIcon(selectedCustomIcon)
        .addTo(markerLayer);
    } else {
      reservations.forEach((reservation) => {
        const marker = Leaflet
          .marker({
            lat: reservation.location.coords[0],
            lng: reservation.location.coords[1],
          })
          .setIcon(
            reservation.id === selectedMarker
              ? selectedCustomIcon
              : defaultCustomIcon
          );

        marker
          .addTo(markerLayer)
          .on('click', () => setSelectedMarker(reservation.id));
      });
    }

    return () => {
      map.removeLayer(markerLayer);
    };
  }, [map, reservations, selectedMarker]);


  return (
    <div className={classNames({ 'contacts__map': !reservations, 'booking-map': !!reservations })}>
      <div className="map">
        <div className="map__container" style={{ height: '100%' }} ref={containerRef}></div>
      </div>

      {/* TODO <p className="booking-map__address">Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м. Петроградская</p> */}
    </div>
  );
}
