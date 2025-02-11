const AppRoute = {
  Main: {
    Path: '/',
    Title: 'Escape Room',
    TitleLink: 'Перейти на Главную',
  },
  Contacts: {
    Path: '/contacts',
    Title: 'Escape Room: Контакты',
    TitleLink: 'к контактам',
  },
  Login: {
    Path: '/login',
    Title: 'Escape Room: Авторизация',
    TitleLink: 'к авторизации',
  },
  Quest: {
    Path: '/quest/:id',
    Title: 'Escape Room: @',
    TitleLink: 'к квесту: "@"',
  },
  MyQuests: {
    Path: '/my-quests',
    Title: 'Escape Room: Мои бронирования',
    TitleLink: 'к моим бронированиям',
  },
  Booking: {
    Path: '/quest/:id/booking',
    Title: 'Escape Room: Бронирование',
    TitleLink: 'к бронированию',
  }
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN'
} as const;

export { AppRoute, AuthorizationStatus };
