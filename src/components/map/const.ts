import Leaflet from 'leaflet';

const CenterSetting = {
  Contact: {
    Coords: [59.968303, 30.317289],
    Zoom: 16
  },
  Booking: {
    Coords: [59.94538, 30.33325],
    Zoom: 10
  }
} as const;

const UrlMarker = {
  Default: '/./img/svg/pin-default.svg',
  Current: '/./img/svg/pin-active.svg',
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

export { CenterSetting, defaultCustomIcon, selectedCustomIcon };
