const APIRoute = {
  Quest: '/quest',
  Booking: '/booking',
  Reservation: '/reservation',
  Login: '/login',
  Logout: '/logout'
} as const;

const LoadingStatus = {
  Unknown: 'Unknown',
  Loading: 'Loading',
  Loaded: 'Loaded',
  Error: 'Error'
} as const;

const SliceName = {
  App: 'APP',
  Quests: 'QUESTS',
  Quest: 'QUEST',
  MyQuests: 'MY_QUESTS',
  User: 'USER',
} as const;

export { APIRoute, LoadingStatus, SliceName };
