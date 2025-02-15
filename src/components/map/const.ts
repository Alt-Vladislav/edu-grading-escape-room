import { Location } from '../../types';
import Leaflet from 'leaflet';


const ContactCoordinates: Location = {
  address: 'Санкт-Петербург, Набережная реки Карповка, д 5П',
  coords: [60.058108, 30.293732]
} as const;

const Zoom = {
  Contact: 17,
  Reservation: 10
} as const;

const UrlMarker = {
  Default: './img/svg/pin-default.svg',
  Current: './img/svg/pin-active.svg',
} as const;

const defaultCustomIcon = Leaflet.icon({
  iconUrl: UrlMarker.Default,
  iconSize: [22, 38],
  iconAnchor: [11, 38]
});
const selectedCustomIcon = Leaflet.icon({
  iconUrl: UrlMarker.Current,
  iconSize: [22, 38],
  iconAnchor: [11, 38]
});

export { ContactCoordinates, Zoom, defaultCustomIcon, selectedCustomIcon };
