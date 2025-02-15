import { BookingOption } from '../../types';
import { CenterSetting, defaultCustomIcon, selectedCustomIcon } from './const';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import Leaflet from 'leaflet';
import classNames from 'classnames';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  selectedBookingOption?: BookingOption;
  bookingOptions?: BookingOption[];
  onCLick?: React.Dispatch<React.SetStateAction<string>>;
}


export default function Map({ selectedBookingOption, bookingOptions, onCLick }: MapProps): JSX.Element {
  const center = (bookingOptions && bookingOptions.length > 0) ? CenterSetting.Booking : CenterSetting.Contact;
  const containerRef = useRef(null);
  const map = useMap(containerRef, center.Coords as [number, number], center.Zoom);

  useEffect(() => {
    if (!map) {
      return;
    }
    const markerLayer = Leaflet.layerGroup().addTo(map);

    if (!bookingOptions) {
      Leaflet
        .marker({
          lat: CenterSetting.Contact.Coords[0],
          lng: CenterSetting.Contact.Coords[1],
        })
        .setIcon(selectedCustomIcon)
        .addTo(markerLayer);
    } else {
      bookingOptions.forEach((option) => {
        const marker = Leaflet
          .marker({
            lat: option.location.coords[0],
            lng: option.location.coords[1],
          })
          .setIcon(
            option.id === selectedBookingOption?.id
              ? selectedCustomIcon
              : defaultCustomIcon
          );

        marker
          .addTo(markerLayer)
          .on('click', () => {
            if (onCLick) {
              onCLick(option.id);
            }
          });
      });
    }

    return () => {
      map.removeLayer(markerLayer);
    };
  }, [map, bookingOptions, selectedBookingOption, onCLick]);


  return (
    <div className={classNames({ 'contacts__map': !bookingOptions, 'booking-map': !!bookingOptions })}>
      <div className="map">
        <div className="map__container" style={{ height: '100%' }} ref={containerRef}></div>
      </div>

      {selectedBookingOption && <p className="booking-map__address">Вы&nbsp;выбрали: {selectedBookingOption.location.address}</p>}
    </div>
  );
}
